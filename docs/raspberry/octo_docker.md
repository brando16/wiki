---
title: Due Octoprint in uno
slug: /raspberry/docker
description: Due Octoprint su un raspberry pi con Docker
keywords: octoprint, raspberry, raspberrypi, docker, 3d printing, flyingbear, flying bear, flyingbear ghost
image: /img/multiInstanceLogo.png
---


[ ![Multi Instance Logo](/img/multiInstanceLogo.png) ](/img/multiInstanceLogo.png)

tutorial a cura di **ReneG**

:::tip
Per i pelandroni che non hanno voglia di leggere, questa guida e' disponibile anche in [formato video su youtube!](https://youtu.be/O2CMUSZjmbw)
:::

Oggi spiegherò come installare multiple istanze di Octoprint in un contenitore docker con supporto multi webcam USB

Con questo setup, potrai avere **controllo indipendente su 2 stampanti tramite un solo Raspberry Pi** cambiando semplicemente porta per decidere quale stampante controllare

Iniziamo!

## Requisiti

* Raspberry Pi 3B+ o superiore
* Raspberry Pi Os fresco di installazione (Consiglio la [versione Lite](https://downloads.raspberrypi.org/raspios_lite_armhf/images/raspios_lite_armhf-2021-05-28/2021-05-07-raspios-buster-armhf-lite.zip))
* Client SSH installato
* 2 Stampanti 3D
* 2 Webcam USB

## Setup iniziale

Dopo aver preparato la SD card con l'immagine con [Balena Etcher](/docs/raspberry/installazione_raspbian) o tramite [Raspberry Pi Imager](https://www.raspberrypi.org/software/), passiamo a configurare l'accesso alla wifi e l'abilitazione del protocollo SSH

Per abilitare l’accesso tramite protocollo SSH dobbiamo aggiungere un semplice file vuoto nominato **ssh** nella root della partizione boot della
SD card

Per garantire al raspberry pi di collegarsi alla tua rete WiFi, dobbiamo creare un nuovo file nella root della partizione boot, questa volta nominandolo **wpa_supplicant.conf**

Dopo aver creato questo file, apriamolo con un qualsiasi editor di testo, tipo Blocco Note (mi raccomando: NON WORD!!!), ed inseriamo le righe seguenti:

```shell
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
country=IT #Insert 2 letter ISO 3166-1 country
update_config=1
network={
ssid="Your WiFi Network SSID"
psk="Your WiFi Network Password"
}

```
:::tip
Nel campo **SSID**, inserire il nome della propria rete wifi

Nel campo **PSK**, inserire la password della propria rete wifi
:::

A questo punto, il setup iniziale è completato, puoi rimuovere la SD card dal computer e metterla nel Raspberry Pi, connettere le due stampanti e webcam ed avviare il sistema

Dopo aver completato la procedura di installazione, il raspberry dovrebbe essere collegato alla tua rete aspettando istruzioni

Apri il client SSH (Sto usando PuTTy per windows) e cerca di raggiungere il terminale utilizzando l’hostname standard del raspberry pi, **raspberripy** sulla porta **22**, poi clicca sul bottone **OPEN**

[ ![Putty](/img/putty.png) ](/img/putty.png)

:::tip
Nel caso in cui non si riesca a raggiungere il raspberry tramite hostname, devi trovare il suo indirizzo IP
Per fare questo c’è un software chiamato **Advanced IP Scanner** che puo' aiutarti in questo compito

[ ![Advanced IP Scanner](/img/advancedIPScanner.png) ](/img/advancedIPScanner.png)
:::


Quando la connesione è stata stabilita, ti verrà chiesto di inserire username e password

Digita quelle di default

```shell
username: pi
password: raspberry
```

Ora andremo a cambiare la password del terminale per ragioni di sicurezza

Digita ```passwd``` e segui le istruzioni a schermo

Ora riavvia il sistema tramite ```sudo reboot```

## Installazione di Docker

Dopo aver riavviato il sistema ed esserti loggato nel terminale con la nuova password, avvia l'installazione di docker:

```shell
curl -fsSL https://get.docker.com -o get-docker.sh

sudo sh get-docker.sh
```

Assegna l'utente **pi** a Docker e riavvia nuovamente il sistema

```shell
sudo usermod -aG docker pi

reboot
```

## Installazione di Portainer

Docker è installato e, siccome ci piace la bella vita, vogliamo anche una bella interfaccia grafica per gestire tutti i nostri contenitori

Per fare questo, utilizzeremo **Portainer**

Per installare Portainer digita il seguente comando:
```shell
docker pull portainer/portainer-ce:linux-arm

docker run -d -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data
portainer/portainer-ce:linux-arm
```

:::danger
La seconda linea di comando va digitata tutta in una riga: la formattazione della wiki non rende bene l'idea, ma e' importante non spezzare i comandi!!!
:::

Bene, anche Portainer è installato ed e' raggiungibile al seguente indirizzo:

```http://raspberrypi:9000/```

:::info
Nel caso in cui tu non stia utilizzando l'hostname, bisogna specificare l'indirizzo ip nel seguente formato:

```http://192.168.x.y:9000/```

dove *x* ed *y* sono le cifre del tuo indirizzo locale
:::

Inserito l'indirizzo, dovresti vedere la pagina di login di Portainer

[ ![Portainer Login](/img/portainer1.png) ](/img/portainer1.png)


Al primo login ci chiederà di creare una nuova password, segui le istruzioni e clicca su **Create User**

La domanda successiva sarà di scegliere a quale ambiente docker dovra' connettersi Portainer 

Scegli **Docker** (Manage the local docker environment) e clicca su **Connect**

[ ![Portainer choose env](/img/portainer2.png) ](/img/portainer2.png)

Portainer è ora configurato, connesso al nostro ambiente docker e pronto per essere utilizzato!

[ ![Portainer setup completed](/img/portainer3.png) ](/img/portainer3.png)

## Identificare stampanti e webcam

Siamo quasi pronti per eseguire la nostra configurazione multi-istanza di octoprint, dobbiamo solo identificare i nostri dispositivi in Linux per preparare il file docker-compose

Presumendo che sia le stampanti che le webcam siano collegate al Pi, torniamo ancora una volta al terminale e digitiamo il seguente comando:

```shell
ls /dev | grep 'ttyUSB\|ttyACM'
```

Questo comando restituirà il percorso di entrambe le stampanti:

[ ![Percorso stampanti](/img/percorsoStampanti.png) ](/img/percorsoStampanti.png)

Bene, sono state trovate entrambe le stampanti!

Adesso basta anteporre /dev/ ed avrai il percorso completo

```
/dev/ttyACM0 --> Printer #1
/dev/ttyUSB0 --> Printer #2
```

Ora dobbiamo fare lo stesso per recuperare entrambe le webcam

Digita:

```shell
v4l2-ctl --list-devices
```

[ ![Lista webcam](/img/listCameras.png) ](/img/listCameras.png)

Abbiamo ottenuto quattro risultati: i primi due possono essere saltati, siamo interessati alle webcam connesse tramite USB, che sono il terzo e il quarto risultato

I percorsi di cui abbiamo bisogno sono i seguenti:

```shell
/dev/video0 --> WebCam #1
/dev/video2 --> WebCam #2
```

Con il terminale, abbiamo finito! D'ora in poi procederemo con l'interfaccia del browser

## Crea più istanze di octoprint con docker-compose

Da Portainer, clicca su **Stacks** (1) e **Add Stack** (2)

[ ![Stacks](/img/stacks.png) ](/img/stacks.png)

Si aprira' un'interfaccia docker-compose

Il primo valore che dobbiamo inserire e' il nome dello stack, può essere casuale, ma suggerisco sempre di usare un nome che abbia un qualche significato per ricordare meglio a cosa serve lo stack

Io usero' **multiInstance**

Nella sezione **web editor** (2), digiteremo il Compose file stesso

:::tip
Ricorda di modificare il Compose file in base ai valori raccolti precedentemente!!!
:::

[ ![Docker Compose File](/img/dockerComposeFile.png) ](/img/dockerComposeFile.png)

Per semplicita', riportiamo qui sotto un esempio di Compose file: 

```Dockerfile
version: '2'
volumes:
  octoprint-1:
  octoprint-2:
services:
  ghost5:
    image: octoprint/octoprint
    ports:
    #Port to reach octoprint that will control PRINTER #1
      - 5001:80
    devices:
    #Printer that belongs to ghost5 container (PRINTER #1)
      - /dev/ttyUSB0:/dev/ttyUSB0
    #WebCam that belongs to ghost5 container (WEBCAM #1)
      - /dev/video0:/dev/video0
    volumes:
      - octoprint-1:/home/octoprint/.octoprint
    environment:
      #Define the quality of the stream from the WEBCAM #1
      - MJPG_STREAMER_INPUT=-n -r 1280x720 -f 30
      #Enable the stream of the WEBCAM #1
      - ENABLE_MJPG_STREAMER=true
    restart: always
  prusa:
    image: octoprint/octoprint
    ports:
    #Port to reach octoprint that will control PRINTER #2
      - 5002:80
    devices:
    #Printer that belongs to prusa container (PRINTER #2)
      - /dev/ttyACM0:/dev/ttyACM0
    #WebCam that belongs to prusa container (WEBCAM #2)
      - /dev/video2:/dev/video0
    volumes:
      - octoprint-2:/home/octoprint/.octoprint
    environment:
      #Define the quality of the stream from the WEBCAM #2
      - MJPG_STREAMER_INPUT=-n -r 1280x720 -f 30
      #Enable the stream of the WEBCAM #2
      - ENABLE_MJPG_STREAMER=true
    restart: always
```

Dopo aver completato il Compose file, clicca sul bottone **Deploy the stack** (3)

Fatto! Le due istanze di Octoprint sono pronte!

Per verificarne lo stato, cliccare su Containers (1)

Possiamo vedere i containers (2) con lo stato RUNNING e la porta (3) per raggiungerli

[ ![Containers list](/img/containersList.png) ](/img/containersList.png)



Ora tutto è pronto per configurare Octoprint e controllare entrambe le stampanti con un Raspberry Pi che gestisce due istanze Octoprint

Per raggiungere Octoprint per la stampante n. 1 basta digitare nella barra degli indirizzi del browser l'hostname/IP del raspberry seguito dal numero di porta per la stampante 1, nell'esempio 5001

Se vuoi controllare la stampante n. 2 usa semplicemente la porta ad essa assegnata, nell'esempio 5002

```
http://raspberrypy:5001/ --> Printer #1
http://raspberrypy:5002/ --> Printer #2
```


Ben fatto! questo tutorial è finito! Posso solo dire buona stampa con la tua nuova configurazione Octoprint MultiInstance!
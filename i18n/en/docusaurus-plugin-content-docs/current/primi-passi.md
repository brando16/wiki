---
title: First Steps
slug: /
---
## Software
The software that runs the machine is called a **Firmware**, it's installed on the motherboard, which is enclosed in the bottom of the printer

It can be updated very easily, using the Micro SD provided with the printer

The first advice we can give you is to update the firmware to the most recent one, which can be downloaded from Github (you can find the link in the top right corner or in the *Firmware* section): it usually contains bug fixes and should avoid compatibility issues with the instructions in this wiki

First of all, backup your SD card (this is optional, if you don't care about the content, which, by default, should be the config file for the firmware and the stl and code file for the screw and the nut)

Once you have backed up your sd:
1. Download firmware
2. Extract it in a folder
3. Put the content of the folder on the SD Card
4. Remove the USB device
5. Insert the SD card in the printer (warning: the sd card must be inserted upside down, with the golden connectors facing upwards)
6. Switch off the printer (if on) and turn it on again

Once you turn it on, you'll see the Flying Bear logo and a prgress bar, showing the installation progress
[ ![Barra di progresso aggiornamento](/img/TFT_Update.jpg) ](/img/TFT_Update.jpg)


When installation is completed, a selection menu will appear on the screen. Now you are a little bit closer to your first print with the FlyingBear Ghost!
Now, do not get carried away with playing around the menu, but:
1. Extract the SD card
3. Insert it in your computer
4. Download the robin_nano35_cfg.cur file
5. Open it with your favourite text editor, like notepad, sublime or atom (absolutely not Word or Wordpad!!!) and save it as robin_nano35_cfg.txt (*shortcut: F2 on Ubuntu, Enter on macOS*)

This file includes all the main configuration parameters of your printer. Changing a value in this file lets you update tha value for the installed firmware

Let's see how and what to change:

Open the robin_nano35_cfg.txt you've saved before with your favourite text editor, then look for the following lines and amend the corresponding value (always leave one space between the capital word and the corresponding value. More than one space doesn't make any difference)

### Language
 ```
 cfg_language_type 7 # Language selection 2 - English 3 - Russian 7 - Italiano
 ```

### Security
 ``` HEATER_0_MINTEMP 5 # It is recommended to set exactly 5 (not -5) to avoid overheating if the sensor 
 HEATER_1_MINTEMP 5 # It is recommended to set exactly 5 (not -5 ) in order to avoid overheating in the event of a sensor breakdown
 THERMAL_PROTECTION_PERIOD 30 # Polling time for thermal protection, seconds 
 THERMAL_PROTECTION_HYSTERESIS 10 # Change in degrees C 
 WATCH_TEMP_PERIOD 30 # Polling time for thermal protection, seconds 
 WATCH_TEMP_INCREASE 	2
 THERMAL_PROTECTION_BED_PERIOD 30 # Poll time for thermal protection, seconds 
 THERMAL_PROTECTION_BED_HYSTERESIS 3 # Change in degrees C 
 WATCH_BED_TEMP_PERIOD 60 # Poll time for thermal protection, seconds 
 WATCH_BED_TEMP_INCREASE 2 # Change 
```

### Wifi 
```
CFG_WIFI_AP_NAME # name of WiFi, write before # 
CFG_WIFI_KEY_CODE # password WiFi, write before #
```

![alt text](/img/wifi_config.png "wifi")

### Fifth calibration point
It's possible to add an additional calibration point (optional) on the GUI (there only four by default), to help bed levelling in the middle too, as well as in the corners

:::tip 
Coordinates for the first four points are correct, the ones for the fifth point should be adjusted to reflect the middle of the bed)
:::
```
 cfg_point_number 5
 cfg_point1:30,30						
 cfg_point2:235,30
 cfg_point3:235,190
 cfg_point4:30,190
 cfg_point5:125,105
```

Updating the firmware is done the usual way

## Final thoughts

Once all the previous steps have been completed, it's a wise choice to make a copy of the robin_nano35_cfg.txt and delete the content of the SD

The printer, as it is, it's ready to print. If you want to increase print quality, though, there are more calibration to perform

All these calibrations can be found in the next pages

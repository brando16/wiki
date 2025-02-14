import React from 'react';

import './Upgrades.css';
import './modal.css'
import { url, baseUrl } from '../../docusaurus.config'


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" onClick={handleClose}>
            Chiudi
          </button>
        </section>
      </div>
    );
  };

function setBaseUrl(){
    console.log(process.env);
    if (process.env.ENV == 'dev'){
        return 'http://localhost:3000/wiki/'
    } else {
        return url + baseUrl
    }
}

class GridItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: false}
        this.props = props;
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.imgUrl =  setBaseUrl() + props.img;
    }
    
    showModal()  {
        this.setState({ show: true });
    }
    
    hideModal() {
        console.log('clicked')
        this.setState({ show: false });
    }

    render(){        
        return(
            <div className='upgradeItemContainer'>
                <div className={`upgradeItem ${this.props.difficulty}`} onClick={this.showModal}>
                    <span className='upgradeItemTitle'>{this.props.title}</span>
                    <div className='upgradeItemInfo'>
                        <img className='upgradeItemImg' src={this.imgUrl}/>
                        <p className='upgradeItemDescription'>{this.props.description}</p>
                    </div>    
                </div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                        <h1 className='title'>{this.props.title}</h1>
                        <div className='infoContainer'>
                            <img width="200" height="200" src={this.imgUrl}></img>
                            <p className="description">{this.props.detailedDescription}</p>
                        </div>
                        {this.props.links.map(function (link, i) {
                           return <a className='link' href={link} target="_blank">Link {i+1}</a>
                        })}
                </Modal>
            </div>
        )
    }
}

export default GridItem;
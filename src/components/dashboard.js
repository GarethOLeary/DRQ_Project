import React, { Component } from "react";

export class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
          show: false
          
        };
        
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        
      }
    
      showModal = () => {
        this.setState({ show: true });
        
      };

      
    
      hideModal = () => {
        this.setState({ show: false });
        
      };
  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>

        
      </main>
    );
  }
}
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  };

  


  
import React from 'react';
import '../styles/Confirm.css';
import {Button, Modal} from 'react-bootstrap';
import confirmImage from '../images/confirm.png';

export class Confirm extends React.Component{

    render(){
        return(
            <Modal
                {...this.props}
                backdrop="static"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Title className="modal-title">
                        You're all set!
                    </Modal.Title>
                    <img className="confirm-image" src={confirmImage} alt="invite-img"/>
                    <p className="modal-p1">
                        A Google Calendar schedule is sent to your friend successfully!
                    </p>
                    <p className="modal-p2">
                        Hope your experience was great and amazing! 
                        We want to empower every person during the team meeting who struggles due to the time difference, 
                        please help us spread the word!
                    </p>
                    <Button 
                        className="confirm-button" 
                        onClick={this.props.onHide}
                        size="lg"
                        style={{color:"white", background:"#6DB4F7"}}>Got it!</Button>
                </Modal.Body>
            </Modal>
        )
    }


}
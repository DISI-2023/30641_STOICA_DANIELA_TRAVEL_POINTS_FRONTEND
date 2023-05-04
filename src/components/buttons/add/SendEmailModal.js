import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import {Input} from "reactstrap";

const SendEmailModal = ({ showEmail,
                          onHide
                          }) => {

    return (
        <Modal
            show={showEmail}
            size="xs"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <div style={{
                    padding: "5px",
                    textAlign: "center",
                    marginLeft: "8rem"
                }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                       Send email test
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                    <Input
                        autoFocus={true}
                        style={{resize: "none", textDecoration: "none"}}
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Test"
                        required
                    />
                    <br/>
                   
            </Modal.Body>
            <Modal.Footer>
                <Button variant="contained" onClick={() => onHide()}
                        >Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SendEmailModal;
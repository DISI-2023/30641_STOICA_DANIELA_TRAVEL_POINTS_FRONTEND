import React, {useState, useEffect, useRef} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import {Input} from "reactstrap";
import * as API from "services/api/travelPointsService";

const SendEmailModal = ({ showEmail,
                          onHide
                          }) => {
const inputRef = useRef();

useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

const [subject, setSubject] = useState('');
const [content, setContent] = useState('');

const onSendEmail = async () => {
    const emailMessage = {
        to: "razvanmadar@gmail.com",
        from: "andreea.tatar23@gmail.com",
        subject: subject,
        body: content,
    }
    await API.sendEmail(emailMessage);
    
    setSubject('');
    setContent('');
    onHide();

    }                          
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
                       Send an email
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
                        placeholder="Subject...."
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)} 
                    />
                    <br/>
                    <Input
                        style={{resize: "none", textDecoration: "none", height: "100px"}}
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Content...."
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)} 
                    />
                   
            </Modal.Body>
            <Modal.Footer>
                <Button variant="contained" onClick={() => onHide()}
                        >Close
                </Button>
                <Button variant="contained" style = {{marginLeft:"15px"}} onClick={() => onSendEmail()}
                        >Send!
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SendEmailModal;
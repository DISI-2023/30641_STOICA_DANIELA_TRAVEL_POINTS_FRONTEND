import React, {useState, useEffect, useRef} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import {FormGroup, Label, Input} from "reactstrap";
import * as API from "services/api/travelPointsService";
 import { LocalizationProvider } from '@mui/x-date-pickers';
 import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const AddOfferModal = ({ showOffer,
    
                     onHide
                          }) => {

const [selectedDateStart, setSelectedDateStart] = useState(new Date());
const [selectedDateEnd, setSelectedDateEnd] = useState(new Date());
const [discount, setDiscount] = useState(0);

const onAddOffer = async () => {

}               
    return (
        <Modal
            show={showOffer}
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
                      Add offer
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
            <FormGroup id='VisitDate'>
                <Label for='VisitDateField'> Start Date : </Label>
                <input type="date" id="dateInput" value={selectedDateStart} onChange={(e) => setSelectedDateStart(e.target.value)} />
            </FormGroup>
            <FormGroup id='VisitDate'>
                <Label for='VisitDateField'> End Date : </Label>
                <input type="date" id="dateInput" value={selectedDateEnd} onChange={(e) => setSelectedDateEnd(e.target.value)} />
            </FormGroup> 
            <Label> Discount: </Label>    
            <Input placeholder="Discount: " value={discount}  onChange={(e) => setDiscount(e.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="contained" onClick={() => onHide()}
                        >Close
                </Button>
                <Button variant="contained" style = {{marginLeft:"15px"}} onClick={() => onAddOffer()}
                        >Add!
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddOfferModal;
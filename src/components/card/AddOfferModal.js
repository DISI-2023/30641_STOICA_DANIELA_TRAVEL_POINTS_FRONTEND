import React, {useState, useEffect, useRef} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import {FormGroup, Label, Input} from "reactstrap";
import * as API from "services/api/travelPointsService";
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {getUsersEmailsForActiveOffers} from "services/api/travelPointsService";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const AddOfferModal = ({
                           showOffer,
                           landmark,
                           onHide
                       }) => {

    const [selectedDateStart, setSelectedDateStart] = useState(new Date());
    const [selectedDateEnd, setSelectedDateEnd] = useState(new Date());
    const [discount, setDiscount] = useState(0);

    const onAddOffer = async () => {
        const request = {
            start: new Date(selectedDateStart).getTime(),
            end: new Date(selectedDateEnd).getTime(),
            landmark_id: landmark.id,
            discount: discount,
        }
        setDiscount(0)
        setSelectedDateEnd(new Date())
        setSelectedDateStart(new Date())
        console.log(request)
        onHide();

        await API.addOffer(request).then(async response => {
            await API.getUsersEmailsForActiveOffers(response.data).then(emails => {
                const validEmails = emails.data;
                validEmails.map(async (email) => {
                    const emailMessage = {
                        to: email,
                        from: "tatar.andreea23@gmail.com",
                        subject: "New offer",
                        body: `New offer for ${landmark.name}, a landmark from your wishlist!`,
                    }
                    return await API.sendEmail(emailMessage);
                })
            })
        });
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
                    <input type="date" id="dateInput" value={selectedDateStart}
                           onChange={(e) => setSelectedDateStart(e.target.value)}/>
                </FormGroup>
                <FormGroup id='VisitDate'>
                    <Label for='VisitDateField'> End Date : </Label>
                    <input type="date" id="dateInput" value={selectedDateEnd}
                           onChange={(e) => setSelectedDateEnd(e.target.value)}/>
                </FormGroup>
                <Label> Discount: </Label>
                <Input type="number" placeholder="Discount: " value={discount} onChange={(e) => setDiscount(e.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="contained" onClick={() => onHide()}
                >Close
                </Button>
                <Button variant="contained" style={{marginLeft: "15px"}} onClick={() => onAddOffer()}
                >Add!
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddOfferModal;
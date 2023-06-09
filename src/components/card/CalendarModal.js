import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import "react-datepicker/dist/react-datepicker.css";
import {FormGroup, Label} from "reactstrap";
import YearGraphic from "../graphics/YearGraphic";
import DayGraphic from "../graphics/DayGraphic";

const CalendarModal = ({
                           show,
                           onHide,
                           selectedDate,
                           setSelectedDate,
                           dayFrequency,
                           frequency
                       }) => {
    const handleClose = () => {
        onHide();
    }

    return (
        <Modal
            show={show}
            size="xs"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <div style={{
                    backgroundColor: "black",
                    padding: "5px",
                    textAlign: "center",
                    marginLeft: "8rem",
                    color: "white"
                }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Calendar
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
            <FormGroup id='VisitDate'>
                <Label for='VisitDateField'> Start Date : </Label>
                <input type="date" id="dateInput" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            </FormGroup>
                <DayGraphic data={dayFrequency}/>
                <YearGraphic data={frequency}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="contained" style={{backgroundColor: "black"}}
                        onClick={handleClose}>Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CalendarModal;
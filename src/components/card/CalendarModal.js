import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const CalendarModal = ({
                              show,
                              onHide
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
            </LocalizationProvider>
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
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import {Input} from "reactstrap";
import style from "./AddReview.module.css";
import Rating from "@mui/material/Rating";

const ReviewLandmarkModal = ({
                                 show,
                                 onHide,
                                 starsNumber,
                                 setStarsNumber,
                                 comment,
                                 setComment,
                                 buttonHandle
                             }) => {

    const [isValid, setIsValid] = useState(true);

    const handleSend = () => {
        if (comment.length < 1) {
            setIsValid(false)
            return;
        }
        setIsValid(true);
        buttonHandle();
        setComment('');
        setStarsNumber(0);
        onHide();
    }

    const handleClose = () => {
        setComment('');
        setStarsNumber(0);
        setIsValid(true);
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
                    textDecoration: "underline",
                    padding: "5px",
                    textAlign: "center",
                    marginLeft: "8rem"
                }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Tell us your opinion
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Rating:
                    <Rating
                        name="simple-controlled"
                        value={starsNumber}
                        onChange={(event, newValue) => {
                            setStarsNumber(newValue);
                        }}
                    />
                </div>
                <div>
                    Comment:
                    <Input className={style.box}
                           id="description"
                           name="description"
                           type="textarea"
                           onChange={(event) => setComment(event.target.value)}
                    />
                    {!isValid && <p style={{color: "red", fontWeight: "bold"}}>Add a comment!</p>}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="contained" style={{backgroundColor: "black", left: "14%"}}
                        onClick={handleClose}
                >Close
                </Button>
                <Button variant="contained" style={{backgroundColor: "black", right: "20%"}}
                        onClick={handleSend}
                >Send
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReviewLandmarkModal;
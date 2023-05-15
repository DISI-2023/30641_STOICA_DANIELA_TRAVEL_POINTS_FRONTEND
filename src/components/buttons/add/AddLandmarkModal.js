import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import {Input} from "reactstrap";

const AddLandmarkModal = ({
                              show,
                              onHide,
                              addLandmark,
                              onChangeIsAddedNewLandmark,
                              name,
                              location,
                              textDescription,
                              category,
                              price,
                              nameInputChangeHandle,
                              locationInputChangeHandle,
                              textDescriptionInputChangeHandle,
                              categoryInputChangeHandle,
                              priceInputChangeHandle,
                              audioInputChangeHandle,
                          }) => {
    const [requiredMessage, setRequiredMessage] = useState('');

    const handleSave = () => {
        if (!name || !location || !textDescription || !category || price == 0) {
            setRequiredMessage('Complete all fields!')
            return;
        }
        setRequiredMessage('');
        addLandmark();
        onChangeIsAddedNewLandmark((prev) => !prev);
        onHide();
    }

    const handleClose = () => {
        setRequiredMessage('');
        nameInputChangeHandle('')
        locationInputChangeHandle('')
        textDescriptionInputChangeHandle('');
        categoryInputChangeHandle('');
        priceInputChangeHandle(0);
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
                        Add a landmark
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
                        placeholder="Type the name..."
                        onChange={(e) => nameInputChangeHandle(e.target.value)}
                        value={name}
                        required
                    />
                    <br/>
                    <Input
                        style={{resize: "none", textDecoration: "none"}}
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Type the location..."
                        onChange={(e) => locationInputChangeHandle(e.target.value)}
                        value={location}
                        required
                    />
                    <br/>
                    <label className="form-label" htmlFor="customFile">Choose image file</label>
                    <input type="file" className="form-control" id="customFile"/>
                    <br/>
                    <Input
                        style={{resize: "none", textDecoration: "none"}}
                        id="description"
                        name="description"
                        type="textarea"
                        placeholder="Type the text description..."
                        onChange={(e) => textDescriptionInputChangeHandle(e.target.value)}
                        value={textDescription}
                        required
                    />
                    <br/>
                    <label className="form-label" htmlFor="audioFile">Choose audio file</label>
                    <input
                        type="file"
                        className="form-control"
                        id="audioFile"
                        accept="audio/mp3"
                        onChange={audioInputChangeHandle}
                        required
                    />
                    <br/>
                    <Input
                        style={{resize: "none", textDecoration: "none"}}
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Type the category..."
                        onChange={(e) => categoryInputChangeHandle(e.target.value)}
                        value={category}
                        required
                    />
                    <br/>
                    <Input
                        style={{resize: "none", textDecoration: "none"}}
                        id="description"
                        name="description"
                        type="number"
                        step={0.5}
                        min={0}
                        placeholder="Type the price..."
                        onChange={(e) => priceInputChangeHandle(e.target.value)}
                        value={price}
                        required
                    />
                {requiredMessage && <p style={{color: "red", fontWeight: "bold"}}>{requiredMessage}</p>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="contained" style={{backgroundColor: "black", left: "14%"}}
                        onClick={handleClose}>Close
                </Button>
                <Button variant="contained" style={{backgroundColor: "black", right: "20%"}}
                        onClick={handleSave}>Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddLandmarkModal;
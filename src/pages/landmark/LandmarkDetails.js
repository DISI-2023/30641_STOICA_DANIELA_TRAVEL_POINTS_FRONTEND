import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";

const LandmarkDetails = ({ show, onHide, landmark }) => {
    return (
        <Modal
            show={show}
            size="xs"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <div style={{ backgroundColor: "black", padding: "8px", textAlign: "center", marginLeft:"12rem" }}>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ color: "white" }}>
                        Details
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                {
                    <div>
                        <span style={{ textAlign: "center" }}>Entry price: {landmark.price}€</span>
                        <br />
                        <span style={{ textAlign: "center" }}>Category: {landmark.category}</span>
                        <br />
                        <span style={{ textAlign: "center" }}>Offers: lorem ipsum lorem ipsum lorem ipsum</span>
                        <br />
                    </div>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ right: "43%", backgroundColor: "black" }}
                    variant="contained"
                    color="primary"
                    onClick={onHide}>Ok

                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LandmarkDetails;
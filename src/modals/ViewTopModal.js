import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import * as API from 'services/api/travelPointsService';
import TopLandmarksGraphic from "../graphics/TopLandmarksGraphic";

const ViewTopModal = ({show, onHide,}) => {
    const [top, setTop] = useState([]);

    useEffect(() => {
        getTopLandmarks();
    }, [])

    const getTopLandmarks = () => {
        API.getTopLandmarks()
            .then(response => {
                const newTop = response.data.map(item => {
                    return {
                        landmark: item.landmarkDetails.name,
                        visitCount: item.visitCount
                    }
                })
                setTop(newTop)
                console.log(newTop)
            })
    }

    return (
        <Modal
            show={show}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <div style={{padding: "5px", textAlign: "center",}}>
                    <Modal.Title id="contained-modal-title-vcenter">TOP</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                <TopLandmarksGraphic data={top}/>
            </Modal.Body>
        </Modal>
    )
}

export default ViewTopModal;
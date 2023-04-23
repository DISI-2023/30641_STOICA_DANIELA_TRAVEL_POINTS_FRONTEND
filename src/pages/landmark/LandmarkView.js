import LandmarkCard from "components/card/LandmarkCard";
import {Col, Row} from "react-bootstrap";
import React from "react";
import Button from "@mui/material/Button";

const LandmarkView = ({landmarks, onLocationChanged, onCategoryChanged, onFilter}) => {
    return (
        <div>
        <label>Location: </label>
        <input placeholder="Location"  onChange={(e) => onLocationChanged(e.target.value)}></input>
        <label>Category: </label>
        <input placeholder="Category" onChange={(e) => onCategoryChanged(e.target.value)}></input>
        <Button onClick={onFilter}> Filter! </Button>

        <Row>
            {landmarks.map((landmark) => (
                <Col key={landmark.id}
                     style={{display: "inline-block", alignItems: "center", justifyContent: "center", margin: "1rem"}}
                >
                    <LandmarkCard landmark={landmark} />

                </Col>
            ))}
        </Row>
        </div>
    )
}

export default LandmarkView;
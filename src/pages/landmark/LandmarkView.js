import LandmarkCard from "components/card/LandmarkCard";
import {Col, Row} from "react-bootstrap";

const LandmarkView = ({landmarks}) => {
    return (
        <Row>
            {landmarks.map((landmark) => (
                <Col key={landmark.id}
                     style={{display: "inline-block", alignItems: "center", justifyContent: "center", margin: "1rem"}}
                >
                    <LandmarkCard landmark={landmark}/>
                </Col>
            ))}
        </Row>
    )
}

export default LandmarkView;
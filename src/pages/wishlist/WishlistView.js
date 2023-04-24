import LandmarkCard from "components/card/LandmarkCard";
import {Col, Row} from "react-bootstrap";

const WishlistView = ({landmarks}) => {
    return (
        <Row>
            {landmarks.map((landmark) => (
                <Col key={landmark.id}
                     style={{display: "inline-block", alignItems: "center", justifyContent: "center", margin: "1rem"}}
                >
                    <LandmarkCard data={landmark}/>
                </Col>
            ))}
        </Row>
    )
}

export default WishlistView;
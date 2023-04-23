import LandmarkCard from "components/card/LandmarkCard";
import {Col, Row} from "react-bootstrap";
import AddLandmark from "components/buttons/add";
import AddLandmarkModal from "../../components/buttons/add/AddLandmarkModal";

const LandmarkView = ({landmarks, addLandmark, show, onChangeShow, onChangeIsAddedNewLandmark, name, location, textDescription,
                          category, price, nameInputChangeHandle, locationInputChangeHandle, textDescriptionInputChangeHandle, categoryInputChangeHandle, priceInputChangeHandle}) => {
    const isAdmin = JSON.parse(localStorage.getItem('userDetails'))?.role === "ADMIN";

    return (
        <div>
            {isAdmin && <AddLandmark onChangeShow={onChangeShow} addLandmark={addLandmark} onChangeIsAddedNewLandmark={onChangeIsAddedNewLandmark}/>}
            <Row>
                {landmarks.map((landmark) => (
                    <Col key={landmark.id}
                         style={{
                             display: "inline-block",
                             alignItems: "center",
                             justifyContent: "center",
                             margin: "1rem"
                         }}
                    >
                        <LandmarkCard landmark={landmark}/>
                    </Col>
                ))}
            </Row>
            <AddLandmarkModal show={show} onHide={() => onChangeShow(false)} onChangeIsAddedNewLandmark={onChangeIsAddedNewLandmark} addLandmark={addLandmark} name={name} location={location} textDescription={textDescription}
                              category={category} price={price} nameInputChangeHandle={nameInputChangeHandle} locationInputChangeHandle={locationInputChangeHandle}
                              textDescriptionInputChangeHandle={textDescriptionInputChangeHandle} categoryInputChangeHandle={categoryInputChangeHandle} priceInputChangeHandle={priceInputChangeHandle}/>
        </div>
    )
}

export default LandmarkView;
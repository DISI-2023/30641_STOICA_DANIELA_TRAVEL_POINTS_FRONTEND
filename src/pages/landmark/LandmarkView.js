import LandmarkCard from "components/card/LandmarkCard";
import {Col, Row} from "react-bootstrap";
import AddLandmark from "components/buttons/add";
import AddLandmarkModal from "../../components/buttons/add/AddLandmarkModal";
import React from "react";
import Button from "@mui/material/Button";
import SendEmailModal from "../../components/buttons/add/SendEmailModal";
import {useEffect, useState} from "react";

const LandmarkView = ({
                          landmarks,
                          addLandmark,
                          show,
                          onChangeShow,
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
                          onFilter,
                          reviewShow,
                          onChangeReviewShow,
                          deleteLandmarkButtonHandle
                      }) => {
    const isAdmin = JSON.parse(localStorage.getItem('userDetails'))?.role === "ADMIN";
    const [showEmail, setShowEmail] = useState(false);
    const onSendEmail = () => {
        setShowEmail(true);
    }
    return (
        <div>
            <label>Location: </label>
            <input placeholder="Location" onChange={(e) => locationInputChangeHandle(e.target.value)}></input>
            <label>Category: </label>
            <input placeholder="Category" onChange={(e) => categoryInputChangeHandle(e.target.value)}></input>
            <Button onClick={onFilter}> Filter! </Button>
            {isAdmin && <AddLandmark onChangeShow={onChangeShow} addLandmark={addLandmark}
                                     onChangeIsAddedNewLandmark={onChangeIsAddedNewLandmark}/>}
            {
                !isAdmin && <Button onClick={onSendEmail} style={{marginLeft: "10%"}}>Make a request</Button>
            }

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
                        <LandmarkCard
                            data={landmark}
                            deleteLandmarkButtonHandle={deleteLandmarkButtonHandle}
                        />
                    </Col>
                ))}
            </Row>
            <AddLandmarkModal show={show} onHide={() => onChangeShow(false)}
                              onChangeIsAddedNewLandmark={onChangeIsAddedNewLandmark} addLandmark={addLandmark}
                              name={name} location={location} textDescription={textDescription}
                              category={category} price={price} nameInputChangeHandle={nameInputChangeHandle}
                              locationInputChangeHandle={locationInputChangeHandle}
                              textDescriptionInputChangeHandle={textDescriptionInputChangeHandle}
                              categoryInputChangeHandle={categoryInputChangeHandle}
                              priceInputChangeHandle={priceInputChangeHandle}/>
            <SendEmailModal showEmail={showEmail} onHide={() => setShowEmail(false)}/>
        </div>
    )
}

export default LandmarkView;
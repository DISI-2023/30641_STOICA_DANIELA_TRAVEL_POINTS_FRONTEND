import React from "react";
import * as API from "services/api/travelPointsService";
import AddReviewView from "./AddReviewView";

export function AddReviewContainer() {
    const buttonHandle = async (request) => {
        return await API.addReview(request)
    }

    return (
        <AddReviewView buttonHandle={buttonHandle}/>
    );
}

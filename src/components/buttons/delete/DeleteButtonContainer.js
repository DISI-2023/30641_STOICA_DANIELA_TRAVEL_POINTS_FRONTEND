import React from "react";
import DeleteButtonView from "./DeleteButtonView";
import * as API from "services/api/travelPointsService";

export function DeleteButtonContainer(props) {
    const buttonHandle = async (_) => {
        return await API.deleteLandmark(props.landmarkId)
    }

    return (
        <DeleteButtonView buttonHandle={buttonHandle}/>
    );
}

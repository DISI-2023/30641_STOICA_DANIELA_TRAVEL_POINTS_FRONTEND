import React, {useState} from "react";
import * as API from "services/api/travelPointsService";
import ReviewLandmarkModal from "./ReviewLandmarkModal";

export function AddReviewContainer({reviewShow, landmarkId, onHide}) {
    const [starsNumber, setStarsNumber] = useState(0);
    const [comment, setComment] = useState('');

    const buttonHandle = async () => {
        return await API.addReview({comment: comment, rating: starsNumber, landmark_id: landmarkId})
    }

    return (
        <ReviewLandmarkModal show={reviewShow} buttonHandle={buttonHandle} onHide={onHide} comment={comment}
                             starsNumber={starsNumber} setStarsNumber={setStarsNumber} setComment={setComment}/>
    );
}

import Rating from '@mui/material/Rating';
import style from './AddReview.module.css';
import {Input} from "reactstrap";
import {useRef, useState} from "react";
import {Button} from "@mui/material";

const AddReviewView = ({buttonHandle}) => {
    const [starsNumber, setStarsNumber] = useState(0);
    const reviewInputRef = useRef();

    const handleRequest = () => {
        const review = reviewInputRef.current.value;
        if (review.length > 0) {
            setStarsNumber(0);
            reviewInputRef.current.value = "";
            buttonHandle({comment: review, rating: starsNumber, landmark_id: 1}); // landmark_id is mocked for now
        }
    }

    return (
        <div className={style.container}>
            <div>
                <Input className={style.box}
                       id="description"
                       name="description"
                       type="textarea"
                       innerRef={reviewInputRef}
                       placeholder="Adauga un review..."
                />
            </div>
            <Rating
                name="simple-controlled"
                value={starsNumber}
                onChange={(event, newValue) => {
                    setStarsNumber(newValue);
                }}
            />
            <Button style={{marginLeft: "1.8rem"}} variant="contained" onClick={handleRequest}>Trimite</Button>
        </div>
    );
}

export default AddReviewView
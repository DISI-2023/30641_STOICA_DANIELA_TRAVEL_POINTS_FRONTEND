import { useEffect, useState } from "react";
import * as API from "services/api/travelPointsService";
import LandmarkView from "./LandmarkView";

export function LandmarkContainer() {
    const [landmarks, setLandmarks] = useState([]);
    const [show, setShow] = useState(false);
    const [isAddedNewLandmark, setIsAddedNewLandmark] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [textDescription, setTextDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0.0);
    const [filter, setFilter] = useState(false);
    const [showTop, setShowTop] = useState(false);
    const [audio, setAudio] =  useState();
    const [image, setImage] =  useState();

    const getLandmarks = async () => {
        try {
            const response = await API.getLandmarks(category, location)
            setLandmarks(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const audioInputChangeHandle = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
               setAudio(reader.result.substring(23));
            };
            reader.readAsDataURL(file);
        }
    }

    const addLandmark = async () => {
        const request = {
            name: name,
            location: location,
            textDescription: textDescription,
            category: category,
            price: price,
            audioDescription: audio,
            image: image
        }

        setName('')
        setLocation('')
        setTextDescription('')
        setCategory('')
        setPrice(0.0)
        setAudio(undefined)
        setImage(undefined)
        return await API.addLandmark(request)
    }

    const onFilter = async () => {
        setFilter((prev)=> !prev)
    }

    const deleteLandmarkButtonHandle = async (_, landmarkId) => {
        setLandmarks(prevState => {
            return prevState.filter(landmark => landmark.id !== landmarkId)
        })
        return await API.deleteLandmark(landmarkId)
    }

    useEffect(() => {
        getLandmarks();
    }, [isAddedNewLandmark, filter])

    const imageInputChangeHandle = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result.substring(23));
                console.log(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div>
            <LandmarkView
                landmarks={landmarks}
                addLandmark={addLandmark}
                show={show}
                onChangeShow={setShow}
                onChangeIsAddedNewLandmark={setIsAddedNewLandmark}
                name={name}
                location={location}
                textDescription={textDescription}
                category={category}
                price={price}
                nameInputChangeHandle={setName}
                locationInputChangeHandle={setLocation}
                textDescriptionInputChangeHandle={setTextDescription}
                categoryInputChangeHandle={setCategory}
                priceInputChangeHandle={setPrice}
                onFilter={onFilter}
                deleteLandmarkButtonHandle={deleteLandmarkButtonHandle}
                showTop={showTop}
                setShowTop={setShowTop}
                audioInputChangeHandle={audioInputChangeHandle}
                imageInputChangeHandle={imageInputChangeHandle}
            />
        </div>
    );
}
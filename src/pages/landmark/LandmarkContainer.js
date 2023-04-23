import { useEffect, useState } from "react";
import * as API from "services/api/travelPointsService";
import LandmarkView from "./LandmarkView";

export function LandmarkContainer() {
    const [landmarks, setLandmarks] = useState([]);
    const [location, setLocation] = useState(null);
    const [category, setCategory] = useState(null);
    const [filter, setFilter] = useState(false);

    const getLandmarks = async () => {
        try {
            const response = await API.getLandmarks(category, location)
            setLandmarks(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const onCategoryChanged = (value) => {
        setCategory(value);
    }
    const onLocationChanged = (value) => {
        setLocation(value);
    }

    const onFilter = async () => {
       setFilter((prev)=> !prev)
    }

    useEffect(() => {
        getLandmarks();
    }, [filter])

    return (
        <div>
            <LandmarkView
                landmarks={landmarks}
                onLocationChanged={onLocationChanged}
                onCategoryChanged={onCategoryChanged}
                onFilter={onFilter}
            />
        </div>
    );
}
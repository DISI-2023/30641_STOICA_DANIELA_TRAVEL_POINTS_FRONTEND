import {useEffect, useState} from "react";
import * as API from "services/api/travelPointsService";
import LandmarkView from "./LandmarkView";

export function LandmarkContainer() {
    const [landmarks, setLandmarks] = useState([]);

    const getLandmarks = async () => {
        try {
            const response = await API.getLandmarks(null, null)
            setLandmarks(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLandmarks();
    }, [])

    return (
        <div>
            <LandmarkView
                landmarks={landmarks}
            />
        </div>
    );
}
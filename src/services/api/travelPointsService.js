import {travelPointsAxios} from "./axios";

const login = async (credentials) => {
    return await travelPointsAxios.post("user/authenticate", JSON.stringify(credentials));
}

const deleteLandmark = async (id) => {
    return await travelPointsAxios.delete(`landmark/${id}`)
}

const addReview = async (request) => {
    return await travelPointsAxios.post(`review`, JSON.stringify(request));
}

export {
    login,
    deleteLandmark,
    addReview
};

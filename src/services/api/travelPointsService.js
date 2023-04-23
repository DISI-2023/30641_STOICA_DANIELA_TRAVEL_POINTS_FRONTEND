import {travelPointsAxios} from "./axios";

const login = async (credentials) => {
    return await travelPointsAxios.post("user/authenticate", JSON.stringify(credentials));
}

const deleteLandmark = async (id) => {
    return await travelPointsAxios.delete(`landmark/${id}`)
}

const register = async (credentials) => {
    return await travelPointsAxios.post("user/register", JSON.stringify(credentials));
}
const addReview = async (request) => {
    return await travelPointsAxios.post(`review`, JSON.stringify(request));
}

const getLandmarks = async (category, location) => {
    let url = "landmark?";
    if (category != null && category !== '') {
        url += "category=" + category + "&";
    }
    if (location != null && location !== '') {
        url += "location=" + location;
    }
    return await travelPointsAxios.get(url)
}

const addLandmark = async (request) => {
    return await travelPointsAxios.post(`landmark`, JSON.stringify(request));
}

const getLandmarksFromWishlist = async(id) => {
    return await travelPointsAxios.get(`wishlist/${id}`)
}

export {
    login,
    deleteLandmark,
    addReview,
    getLandmarks,
    getLandmarksFromWishlist,
    register,
    addLandmark
};

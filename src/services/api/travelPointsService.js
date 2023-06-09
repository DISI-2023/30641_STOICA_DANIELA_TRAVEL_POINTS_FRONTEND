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
const addToFavourite = async (landmarkId, userId) => {
    let url = "wishlist?";
    if (landmarkId != null) {
        url += "landmarkId=" + landmarkId + "&";
    }
    if (userId != null) {
        url += "userId=" + userId;
    }
    return await travelPointsAxios.post(url)
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

const editLandmark = async (request) => {
    return await travelPointsAxios.put(`landmark`, JSON.stringify(request));
}

const getLandmarksFromWishlist = async(id) => {
    return await travelPointsAxios.get(`wishlist/${id}`)
}

const sendEmail = async(request) => {
    return await travelPointsAxios.post(`email`, JSON.stringify(request));
}

const getOffer = async (landmarkId) => {
    return await travelPointsAxios.get(`offer/all/${landmarkId}`)
}

const deleteOffer = (id) => {
    travelPointsAxios.delete(`offer/${id}`)
}


const addOffer = async(request) => {
    return await travelPointsAxios.post(`offer`, JSON.stringify(request));
}

const getYearFrequencyForLandmark = async(year, id) => {
    return await travelPointsAxios.get(`visit/year-frequency?year=${year}&landmarkId=${id}`);
}

const getUsersEmailsForActiveOffers = async(offerId) => {
    console.log(`offer/emails?offerId=${offerId}`)
    return await travelPointsAxios.get(`offer/emails?offerId=${offerId}`);
}

const getTopLandmarks = async () => {
    return await travelPointsAxios.get(`landmark/most-visited`)
}

const getDayFrequencyForLandmark = async (date, landmarkId) => {
    console.log(date)
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    return await travelPointsAxios.get(`visit/day-frequency?year=${year}&month=${month}&day=${day}&landmarkId=${landmarkId}`);
}

export {
    login,
    deleteLandmark,
    addReview,
    getLandmarks,
    addToFavourite,
    getLandmarksFromWishlist,
    register,
    addLandmark,
    editLandmark,
    sendEmail,
    getUsersEmailsForActiveOffers,
    getOffer,
    deleteOffer,
    addOffer,
    getTopLandmarks,
    getDayFrequencyForLandmark,
    getYearFrequencyForLandmark,
};

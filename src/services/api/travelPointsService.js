import {travelPointsAxios} from "./axios";

const login = async (credentials) => {
    return await travelPointsAxios.post("user/authenticate", JSON.stringify(credentials));
}

const deleteLandmark = async (id) => {
    return await travelPointsAxios.delete(`landmark/${id}`)
}

const getLandmarks = async (category, location) => {
    let url = "landmark?";
    if (category != null) {
        url += "category=" + category + "&";
    }
    if (location != null) {
        url += "location=" + location;
    }
    return await travelPointsAxios.get(url)
}

export {
    login,
    deleteLandmark,
    getLandmarks
};

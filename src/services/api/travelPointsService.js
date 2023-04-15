import {travelPointsAxios} from "./axios";

//USER
const login = async (credentials) => {
    return await travelPointsAxios.post("user/authenticate", JSON.stringify(credentials));
}

//LANDMARK
const deleteLandmark = async (id) => {
    return await travelPointsAxios.delete(`landmark/${id}`)
}

export {
    login,
    deleteLandmark
};

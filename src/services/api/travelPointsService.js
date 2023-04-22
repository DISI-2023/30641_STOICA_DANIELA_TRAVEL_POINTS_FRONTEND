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
export {
    login,
    deleteLandmark,
    register
};

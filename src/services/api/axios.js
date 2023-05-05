import axios from 'axios';

export const TRAVEL_POINTS_SERVICE_URL = "http://127.0.0.1:8081/api/v1/"


export const travelPointsAxios = axios.create({
    baseURL: TRAVEL_POINTS_SERVICE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

import { useLocation, Navigate, Outlet } from "react-router-dom";
import {LOGIN, UNAUTHORIZED} from "./CONSTANTS";

const RequireAuth = ({ allowedRoles }) => {
    const userLocalStorage = localStorage.getItem('userDetails');
    const user = userLocalStorage ? JSON.parse(userLocalStorage) : undefined;
    const role = user?.role;
    const location = useLocation();

    return (
        allowedRoles?.includes(role)
            ? <Outlet />
            : role
                ? <Navigate to={UNAUTHORIZED} state={{ from: location }} replace />
                : <Navigate to={LOGIN} state={{ from: location }} replace />
    );
}

export default RequireAuth;
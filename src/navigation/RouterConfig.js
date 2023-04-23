import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {HOMEPAGE, LANDMARKS, LOGIN, ROOT} from "navigation/CONSTANTS";
import {NotFound} from './NotFound';
import RequireAuth from "./RequireAuth";
import Login from 'pages/login';
import Home from 'pages/home';
import Landmarks from 'pages/landmark'

const ROLES = {
    TOURIST: 'TOURIST',
    ADMIN: 'ADMIN'
}

export const RouterConfig = () => {
    return (<div>
            <Router >
                <Routes>
                    {/* public routes */}
                    <Route path={ROOT} element={<Home />} />
                    <Route path={LOGIN} element={<Login />} />
                    <Route path={HOMEPAGE} element={<Home />} />
                    <Route path={LANDMARKS} element={<Landmarks />} />

                    {/* private routes */}
                    <Route element={<RequireAuth allowedRoles={[ROLES.TOURIST]} />}>
                        {/*<Route path={<the path to a page accessible only to tourists>} element={<<Any Component> />} />*/}
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
                        {/*<Route path={<the path to a page accessible only to admins>} element={<<Any Component> />} />*/}
                    </Route>


                    {/* catch all */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
    </div>
    )
}

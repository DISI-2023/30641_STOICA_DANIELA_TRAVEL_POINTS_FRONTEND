import React, {useEffect, useRef, useState} from "react";
import LoginView from "./LoginView";
import {useLocation, useNavigate} from "react-router-dom";
import {HOMEPAGE} from "navigation/CONSTANTS";
import * as API from "services/api/travelPointsService";

export function LoginContainer(props) {
    const navigate = useNavigate();
    const location = useLocation ();
    const from = location.state?.from?.pathname;

    const emailInputRef = useRef();
    const errorInputRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        emailInputRef.current.focus();
    }, [])

    const login = async (e) => {
        e.preventDefault();

        try {
            const {data: user} = await API.login({ email: email, password: password })

            localStorage.setItem('userDetails', JSON.stringify(user))

            redirect();
        } catch ({response: error}) {
            setErrorMessage(error.status === 500 ? error.data.message : 'Login Failed');

            setPassword('');
            setEmail('');
        }
    }

    const redirect = () => navigate(from ??  HOMEPAGE, {replace: true});

    return (
        <div>
            <LoginView
                isActive={props.isActive}
                emailInputRef={emailInputRef}
                errorInputRef={errorInputRef}
                email={email}
                password={password}
                errorMessage={errorMessage}
                emailInputChangeHandle={setEmail}
                passwordInputChangeHandle={setPassword}
                loginFormSubmitHandle={login}
            />
        </div>
    );
}

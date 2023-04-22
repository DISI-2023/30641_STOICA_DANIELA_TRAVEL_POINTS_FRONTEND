import React, {useRef, useState} from "react";
import RegisterView from "./RegisterView";
import {useLocation, useNavigate} from "react-router-dom";
import {HOMEPAGE} from "navigation/CONSTANTS";
import * as API from "services/api/travelPointsService";

export function RegisterContainer(props) {
    const navigate = useNavigate();
    const location = useLocation ();
    const from = location.state?.from?.pathname;

    const errorInputRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const register = async (e) => {
        e.preventDefault();

        try {
            await API.register({ email: email, name: name, password: password})

            redirect();
        } catch ({response: error}) {
            setErrorMessage(error.status === 500 ? error.data.message : 'Register Failed');

            setPassword('');
            setEmail('');
            setName('');
        }
    }

    const redirect = () => navigate(from ??  HOMEPAGE, {replace: true});

    return (
        <div>
            <RegisterView
                errorInputRef={errorInputRef}
                email={email}
                password={password}
                name={name}
                errorMessage={errorMessage}
                emailInputChangeHandle={setEmail}
                passwordInputChangeHandle={setPassword}
                nameInputChangeHandle={setName}
                registerFormSubmitHandle={register}
            />
        </div>
    );
}

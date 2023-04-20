import styles from './Login.module.css';

const LoginView = (props) => {
    return (
        <div className={styles.container}>
            <form className={styles.form} id="b-form" onSubmit={props.loginFormSubmitHandle}>
                <h2 className={styles.title}>Sign in to Website</h2>
                <input
                    className={styles.form__input}
                    placeholder="Email"
                    type="email"
                    id="email"
                    ref={props.emailInputRef}
                    onChange={(e) => props.emailInputChangeHandle(e.target.value)}
                    value={props.email}
                    required
                />
                <input
                    className={styles.form__input}
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e) => props.passwordInputChangeHandle(e.target.value)}
                    value={props.password}
                    required
                />
                <label className={styles.text_red}>{props.errorMessage}</label>
                <button className={["form__button", styles.button, "submit"].join(" ")}>SIGN IN</button>
            </form>
        </div>
    );
}

export default LoginView

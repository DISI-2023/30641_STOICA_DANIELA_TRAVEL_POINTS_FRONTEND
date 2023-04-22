import styles from './Register.module.css';

const RegisterView = (props) => {
    return (
        <div className={styles.container}>
            <form className={styles.form} id="b-form" onSubmit={props.registerFormSubmitHandle}>
                <h2 className={styles.title}>Register on Travel Points</h2>
                <input
                    className={styles.form__input}
                    placeholder="Email"
                    type="email"
                    id="email"
                    onChange={(e) => props.emailInputChangeHandle(e.target.value)}
                    value={props.email}
                    required
                />
                 <input
                    className={styles.form__input}
                    placeholder="Name"
                    type="name"
                    id="name"
                    onChange={(e) => props.nameInputChangeHandle(e.target.value)}
                    value={props.name}
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
                <button className={["form__button", styles.button, "submit"].join(" ")}>REGISTER</button>
            </form>
        </div>
    );
}

export default RegisterView

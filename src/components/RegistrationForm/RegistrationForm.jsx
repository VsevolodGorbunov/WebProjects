import { FormEvent, useState } from "react";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [sec_password, setSecPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [sec_passwordError, setSecPasswordError] = useState("");

    const isValid = (): boolean => {
        let result = true;

        // очищаем ошибки
        setLoginError("");

        if (!/^([a-z0-9]{6,20})$/.test(login)) {
            setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.");
            result = false;
        }

        if (login.length === 0) {
            setLoginError("Логин не может быть пустым.");
            result = false;
        }

        setPasswordError("");
        setSecPasswordError("");

        if (password.length === 0) {
            setPasswordError("Пароль не может быть пустым.");
            result = false;
        }

        if (password !== sec_password) {
            setSecPasswordError("Пароль не совпадает.");
            result = false;
        }

        return result;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isValid()) {
            // отправка данных на сервер
        }
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Логин:
                    <input value={login} onChange={e => setLogin(e.target.value)}/>
                </label>
                {loginError && <div className={styles.error}>
                    {loginError}
                </div>}
            </div>
            <div>
                <label>Пароль:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                {passwordError && <div className={styles.error}>
                    {passwordError}
                </div>}
            </div>
            <div>
                <label>Повтор пароля:
                    <input type="password" value={sec_password} onChange={e => setSecPassword(e.target.value)}/>
                </label>
                {sec_passwordError && <div className={styles.error}>
                    {sec_passwordError}
                </div>}
            </div>
            <button type="submit">Войти</button>
        </form>
    </>;
}
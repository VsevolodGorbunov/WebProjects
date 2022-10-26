import React, { FormEvent, useState } from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const handleLogin = () => setUser({ id: '1', name: 'admin' });
    const handleLogout = () => setUser(null);

    const [passwordError, setPasswordError] = useState("");

    const isValid = (): boolean => {
        let result = true;

        // очищаем ошибки
        setLoginError("");

        if (!/^([a-z0-9]{5,20})$/.test(login)) {
            setLoginError("Логин должен содержать от 5 до 20 символов латинского алфавита и цифры.");
            result = false;
        }

        if (login.length === 0) {
            setLoginError("Логин не может быть пустым.");
            result = false;
        }

        setPasswordError("");


        if (password.length === 0) {
            setPasswordError("Пароль не может быть пустым.");
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
            {user ? (
                <button onClick={handleLogout}>Sign Out</button>
            ) : (
                <button onClick={handleLogin}>Sign In</button>
            )}
            {/*<button type="submit">Войти</button>*/}
        </form>
    </>;
};
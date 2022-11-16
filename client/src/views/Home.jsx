import React, { useEffect, useState } from 'react';
import { BASE_URL } from "../services/api";

function Home() {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const userRequest = async () => {
            setResult("");
            setError("");
            try {
                const response = await fetch(`${BASE_URL}/user`, {
                    credentials: "include",
                    method: "GET"
                });
                if (response.status !== 200) {
                    const responseData = await response.json();
                    throw Error(responseData.message);
                }
                const user = await response.json();
                setResult(`Добро пожаловать, ${user.login}`);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        };
        userRequest();
    }, []);

    return <>
        <h3>Главная</h3>
        Главная страница
        {result && <div>{result}</div>}
        {error && <div>{error}</div>}
    </>;
}

export default Home;
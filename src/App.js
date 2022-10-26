import './App.css';
import React, {useEffect, useState} from "react";
import {Link, Route, Routes} from 'react-router-dom';
import Cities from "./components/Cities";
import Calculator from "./components/Calculator";
import Filter from "./components/Filter";
import Kontrolnaya from "./components/Kontrolnaya";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./components/HomeView/Home";


function App() {
    return (        <div className="App">
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/registration">Registration</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/registration" element={<RegistrationForm/>}/>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

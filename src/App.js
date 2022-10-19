import './App.css';
import React, {useEffect, useState} from "react";
import Cities from "./components/Cities";
import Calculator from "./components/Calculator";
import Filter from "./components/Filter";
import Kontrolnaya from "./components/Kontrolnaya";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App() {
    return (
        <div className="App">
            <RegistrationForm/>
        </div>
    );
}

export default App;

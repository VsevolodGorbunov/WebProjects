import React, {useState} from "react";

export default function Cities() {
    const [city, setCity] = useState("Novosibirsk");

    const getText = () => {
        if (city !== "Rio de Janeiro") {
            return "Нет, это не Рио-де-Жанейро!";
        } else {
            return "Это Рио-де-Жанейро!";
        }
    };

    return <>
        <fieldset>
            <legend>Cities</legend>
            <label>{getText()}</label>
            <br/>
            <select
                value={city}
                onChange={e => {
                    setCity(e.target.value);
                }}
            >

                <optgroup label="Russian cities">
                    <option value="Novosibirsk">Novosibirsk</option>
                    <option value="Moscow">Moscow</option>
                </optgroup>
                <optgroup label="Brazilian cities">
                    <option value="Sao Paulo">Sao Paulo</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                </optgroup>
            </select>
        </fieldset>
    </>;
}
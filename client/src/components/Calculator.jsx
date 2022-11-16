import React, {useState} from "react";

export default function Calculator() {
    const [oper, setOper] = useState();
    const [firstnum, setFirstNum] = useState(0);
    const [secnum, setSecNum] = useState(0);

    const getAnswer = () => {
        switch (oper) {
            case "+": return firstnum + secnum;
            case "-": return firstnum - secnum;
            case "*": return firstnum * secnum;
            case "/": return firstnum / secnum;
        }
    };

    return <>
        <input
            value={firstnum}
            onChange={e => {
                setFirstNum(Number(e.target.value));
            }}
        />
        <select
            value={oper}
            onChange={e => {
                setOper(e.target.value);
            }}
        >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input
            value={secnum}
            onChange={e => {
                setSecNum(Number(e.target.value));
            }}/>
        =
        <label>{getAnswer()}</label>
    </>;
}
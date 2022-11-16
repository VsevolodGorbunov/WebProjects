import React, {useState} from "react";

const FILTER = {
    ALL: "Все",
    EVEN: "Четные",
    ODD: "Нечетные",
};

export default function Filter() {
    const [num, setNum] = useState("0");
    const [array, setArray] = useState([]);
    const [filter, setFilter] = useState(FILTER.ALL);

    const updArray = () => {
        setArray([...array, num]);
    };

    const returnArray = () => {
        switch (filter) {
            case FILTER.ALL: return array;
            case FILTER.EVEN: return array.filter(element => element % 2 === 0);
            case FILTER.ODD: return array.filter(element => element % 2 !== 0);
        }
    };

    return <>
        <div>
            <input
                value={num}
                onChange={e => {
                    setNum(Number(e.target.value));
                }}
            />
            <input type="button"
                   value="+"
                   onClick={updArray}
            />
        </div>
        <div>
            <input type="radio" id="all"
                   name="contact" value="Все" checked={filter === FILTER.ALL} onChange={() => setFilter(FILTER.ALL)}/>
            <label htmlFor="all">Все</label>
            <input type="radio" id="even"
                   name="contact" value="Четные" checked={filter === FILTER.EVEN}
                   onChange={() => setFilter(FILTER.EVEN)}/>
            <label htmlFor="even">Четные</label>
            <input type="radio" id="odd"
                   name="contact" value="Нечетные" checked={filter === FILTER.ODD}
                   onChange={() => setFilter(FILTER.ODD)}/>
            <label htmlFor="odd">Нечетные</label>
        </div>
        <div><label>{returnArray().join(", ")}</label></div>
    </>;
}
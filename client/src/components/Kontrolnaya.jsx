import React, {useState} from "react";

const FILTER = {
    ALL: "Все",
    POS: "Четные",
    NEG: "Нечетные",
};

export default function Kontrolnaya() {
    const [num, setNum] = useState("");
    const [array, setArray] = useState([]);
    const [filter, setFilter] = useState(FILTER.ALL);

    const updArray = () => {
        if (isNaN(parseInt((num)))) {
            setNum("");
            return 0;
        } else {
            setArray([...array, num]);
        }
        setNum("");
    };

    const returnArray = () => {
        switch (filter) {
            case FILTER.ALL:
                return array;
            case FILTER.POS:
                return array.filter(element => element >= 0);
            case FILTER.NEG:
                return array.filter(element => element < 0);
        }
    };

    return <>
        <div>
            <input
                value={num}
                onChange={e => {
                    setNum((e.target.value));
                }}
            />
            <input type="button"
                   value="+"
                   onClick={updArray}
            />
        </div>
        <div>
            {Object.values(FILTER).map()}
            <input type="radio" id="all"
                   name="contact" value="Все" checked={filter === FILTER.ALL} onChange={() => setFilter(FILTER.ALL)}/>
            <label htmlFor="all">Все</label>
            <input type="radio" id="pos"
                   name="contact" value="Положительные" checked={filter === FILTER.POS}
                   onChange={() => setFilter(FILTER.POS)}/>
            <label htmlFor="pos">Положительные</label>
            <input type="radio" id="neg"
                   name="contact" value="Отрицательные" checked={filter === FILTER.NEG}
                   onChange={() => setFilter(FILTER.NEG)}/>
            <label htmlFor="neg">Отрицательные</label>
        </div>
        <div><label>{returnArray().join(", ")}</label></div>
    </>;
}
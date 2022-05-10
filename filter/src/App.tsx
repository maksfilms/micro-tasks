import React, {useState} from "react";
import "./App.css";

type FilterType = "all" | 'dollars' | 'ruble';



function App() {


    const [money, setMoney] = useState([
        {banknots: "dollars", value: 100, number: " a1234567890"},
        {banknots: "dollars", value: 50, number: " z1234567890"},
        {banknots: "ruble", value: 100, number: " w1234567890"},
        {banknots: "dollars", value: 100, number: " e1234567890"},
        {banknots: "dollars", value: 50, number: " c1234567890"},
        {banknots: "ruble", value: 100, number: " r1234567890"},
        {banknots: "dollars", value: 50, number: " x1234567890"},
        {banknots: "ruble", value: 50, number: " v1234567890"},
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    let currentCurrency = money;
    if (filter === "dollars") {
        currentCurrency = currentCurrency.filter((filteredMoney) => filteredMoney.banknots === "dollars")
    } else if (filter === "ruble") {
        currentCurrency = currentCurrency.filter((filteredMoney) => filteredMoney.banknots === "ruble")
    }

    const onClickHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentCurrency.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
                <button onClick={() => onClickHandler("dollars")}>Dollars</button>
                <button onClick={() => onClickHandler("ruble")}>Ruble</button>
                <button onClick={() => onClickHandler("all")}>All</button>
            </ul>

        </>
    )
}

export default App;

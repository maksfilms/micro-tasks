import React, {useEffect, useState} from "react";
import "./App.css";


function App() {

    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        let stringValue = localStorage.getItem("testKey")
        if (stringValue) {
            let numberValue = JSON.parse(stringValue)
            setValue(numberValue)
        }

    }, [])


    useEffect(() => {
        localStorage.setItem("testKey", JSON.stringify(value))
    }, [value])


    const incHandler = () => {
        setValue(value + 1)
    }

    return (
        <div className="App">
            {/*<SetGetClearRemove />*/}

            <h1>{value}</h1>
            <button onClick={incHandler}>Inc</button>
        </div>
    )

}

export default App;

import React, {useState} from "react";


export const SetGetClearRemove = (props: any) => {

    const [value, setValue] = useState(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    const setHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value)) //to string
    }
    const getHandler = () => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }


    const clearHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeHandler = () => {
        localStorage.removeItem('counterValue')
    }

    return(
        <div className="App">

            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setHandler}>set to local storage</button>
            <button onClick={getHandler}>get from local storage</button>
            <button onClick={clearHandler}>clear local storage</button>
            <button onClick={removeHandler}>remove value from local storage</button>
        </div>
    )

}
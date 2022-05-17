import React, {useState} from "react";
import "./App.css";
import {Fullinput} from "./components/Fullinput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";



function App() {
    let [message, setMessage] = useState([
            {message: "message1"},
            {message: "message2"},
            {message: "message3"},
            {message: "message4"},
            {message: "message5"}
        ]
    )

    let [title, setTitle] = useState("")

    let addMessage = (title: string) => {
       setMessage([{message: title}, ...message])
    }
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            {/*<Fullinput addMessage={addMessage}/>*/}

            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;

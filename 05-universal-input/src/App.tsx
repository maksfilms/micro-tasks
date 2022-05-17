import React, {MouseEventHandler, useState} from "react";
import "./App.css";
import {Fullinput} from "./components/Fullinput";



function App() {
    let [message, setMessage] = useState([
            {message: "message1"},
            {message: "message2"},
            {message: "message3"},
            {message: "message4"},
            {message: "message5"}
        ]
    )

    let addMessage = (title: string) => {
       setMessage([{message: title}, ...message])
    }

    return (
        <div className="App">
            <Fullinput addMessage={addMessage}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;

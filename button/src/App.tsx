import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const onclickHandler = (name: string) => {
        console.log(name)
    }

    return (
        <div className="App">
            <button onClick={(event) => onclickHandler('Bob')}>MyYouTubeChannel-1</button>
            <button onClick={(event) => onclickHandler("Alex")}>MyYouTubeChannel-2</button>
        </div>
    );
}

export default App;

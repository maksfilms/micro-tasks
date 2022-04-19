import React from "react";
import "./App.css";
import {Button} from "./components/Button";



function App() {
    const myFunc = (address: string, age: number, friend: string) => {
        console.log(address, age, friend)
    }
    const myFunc2 = () => {
        console.log('Bob')
    }

    return (
        <div>
            <Button name={"YouTubeChannel-1"} callBack={() => myFunc('Minsk', 21, 'Bob')}/>
            <Button name={"YouTubeChannel-1"} callBack={myFunc2}/>
        </div>

    )

}
export default App;

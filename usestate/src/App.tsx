import React, {useState} from "react";
import './App.css';

function App() {

    let [a, setA] = useState(0)

    const onclickHandler = () => {
        setA(++a);
    }
    const onclickHandler2 = () => {
        setA(0);
    }

  return (
    <div className="App">
        <h1>{a}</h1>
      <button onClick={onclickHandler}>counter</button>
      <button onClick={onclickHandler2}>0</button>
    </div>
  );
}

export default App;

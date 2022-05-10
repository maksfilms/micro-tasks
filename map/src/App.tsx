import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyCars, CarsType} from "./01/01-task";


function App() {
    const topCars: Array<CarsType> = [
        {manufacturer: "BMW", model: "m5cs"},
        {manufacturer: "Mercedes", model: "e63s"},
        {manufacturer: "Audi", model: "rs6"}
    ]

  return (
    <div className="App">
      <MyCars topCars={topCars}/>
    </div>
  );
}

export default App;

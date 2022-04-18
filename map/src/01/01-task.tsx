import React from "react";
import "../App.css"

export const topCars = [
    {manufacturer: "BMW", model: "m5cs"},
    {manufacturer: "Mercedes", model: "e63s"},
    {manufacturer: "Audi", model: "rs6"}
]

type MyCarsProps = {
    cars: Array<CarsType>
}
type CarsType = {
    manufacturer: string
    model: string
}


export function MyCars(props: MyCarsProps) {
    return (
        <div>
            {props.cars.map((carObject, index) => {
            return (
                <li>
                    <ul key={index}>{carObject.manufacturer}</ul>
                    <ul key={index}>{carObject.model}</ul>
                </li>
            )
        })}
        </div>
    )
}
///











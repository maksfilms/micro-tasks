import React from "react";
import "../App.css"

export type MyCarsProps = {
    topCars: Array<CarsType>
}
export type CarsType = {
    manufacturer: string
    model: string
}


export function MyCars(props: MyCarsProps) {
    return (
        <>
            {props.topCars.map((e, i) =>
                <table>
                    <tr>
                        <th>{i + 1}</th>
                    </tr>
                    <tr>
                        <td>{e.manufacturer}</td>
                    </tr>
                    <tr>
                        <td>{e.model}</td>
                    </tr>
                </table>)}
        </>
    )
}

///











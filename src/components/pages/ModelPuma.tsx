import React from 'react';
import {useParams} from "react-router-dom";
import {pumaArr} from "./Puma";

export const ModelPuma = () => {

    const paramsPuma = useParams()

    let findPuma = pumaArr.find((puma) => puma.id === paramsPuma.id)

    return (
        <>
            {findPuma
                ? <div>
                    <h2>{findPuma.model}</h2>
                    <h4>{findPuma.collection}</h4>
                    <h3>{findPuma.price}</h3>
                    <img src={findPuma.picture}
                         alt={findPuma.model}/>
                </div>
                : <div>
                    <h2>No model</h2>
                </div>}
        </>
    );
};
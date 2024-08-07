import React from 'react';
import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";

export const Model = () => {
    const params = useParams()
    console.log(params.id)
    return (
        <div>
            {adidasArr.map((adidas) => (adidas.id === params.id
                ? <div>
                    <h2>{adidas.model}</h2>
                    <h4>{adidas.collection}</h4>
                    <h3>{adidas.price}</h3>
                    <img src={adidas.picture}
                         alt={adidas.model}/>
                </div>
                : ""))}
        </div>
    )
};

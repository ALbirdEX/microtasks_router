import React from 'react';
import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma";
import {adidasArr, AdidasItem} from "./Adidas";

type CrossModelsType = {
    [key: string]: (PumaItem[] | AdidasItem[])
}

const crossModels: CrossModelsType = {
    puma: pumaArr,
    adidas: adidasArr
}


export const Model = () => {

    //const paramsModel = useParams()
    const {model, id} = useParams()

    console.log(model, id)

    let findModel = model
        ? crossModels[model].find((el) => el.id === id)
        : null

    return (
        <>
            {findModel
                ? <div>
                    <h2>{findModel.model}</h2>
                    <h4>{findModel.collection}</h4>
                    <h3>{findModel.price}</h3>
                    <img src={findModel.picture}
                         alt={findModel.model}/>
                </div>
                : <div>
                    <h2>No model</h2>
                </div>}
        </>
    );
};
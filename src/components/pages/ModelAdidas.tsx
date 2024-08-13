import React from 'react';
import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";

export const ModelAdidas = () => {

    const params = useParams()

    /*
        let filterAdidas = adidasArr.filter((adidas) => adidas.id === params.id)
    */
    let findAdidas = adidasArr.find((adidas) => adidas.id === params.id)

    /*   function filter() {
           if (findAdidas) {
               return (
                   <div>
                       <h2>{findAdidas?.model}</h2>
                       <h4>{findAdidas?.collection}</h4>
                       <h3>{findAdidas?.price}</h3>
                       <img src={findAdidas?.picture}
                            alt={findAdidas?.model}/>
                   </div>
               )
           } else {
               return (
                   <div>
                       <h2>No model</h2>
                   </div>
               )
           }
       }*/

    return <>
        {/*  {adidasArr.map(adidas => adidas.id === params.id
            ? <div key = {adidas.id}>
                <h2>{adidas.model}</h2>
                <h4>{adidas.collection}</h4>
                <h3>{adidas.price}</h3>
                <img src={adidas.picture}
                     alt={adidas.model}/>
            </div>
            : '')}*/}
        {/*  {filterAdidas.map((adidas) => (
                <div key={adidas.id}>
                    <h2>{adidas.model}</h2>
                    <h4>{adidas.collection}</h4>
                    <h3>{adidas.price}</h3>
                    <img src={adidas.picture}
                         alt={adidas.model}/>
                </div>
            )
        )}*/}
        {/*<div>
            <h2>{findAdidas?.model}</h2>
            <h4>{findAdidas?.collection}</h4>
            <h3>{findAdidas?.price}</h3>
            <img src={findAdidas?.picture}
                 alt={findAdidas?.model}/>
        </div>*/}
        {/*{filter()}*/}
        {findAdidas
            ? <div>
                <h2>{findAdidas.model}</h2>
                <h4>{findAdidas.collection}</h4>
                <h3>{findAdidas.price}</h3>
                <img src={findAdidas.picture}
                     alt={findAdidas.model}/>
            </div>
            : <div>
                <h2>No model</h2>
            </div>}
    </>
};

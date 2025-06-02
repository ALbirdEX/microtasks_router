import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";

export const Links = () => {
    return (
        <>
            <div><NavLink to={PATH.PAGE1}>Adidas</NavLink></div>
            <div><NavLink to={PATH.PAGE2}>Puma</NavLink></div>
            <div><NavLink to={PATH.PAGE3}>Abibas</NavLink></div>
            <div><NavLink to={PATH.PAGE_ERROR}><button>ЕГОГО</button></NavLink></div>
            <div><NavLink to={PATH.PAGE_START}><button>Choose</button></NavLink></div>

        </>
    );
};
import React from 'react';
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles";
import {Links} from "./components/pages/Links";
import {Adidas} from "./components/pages/Adidas";
import Start from "./components/pages/Start";
import {Model} from "./components/pages/Model";

export const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    MODEL: '/:model/:id',
    MODEL_ADIDAS: '/adidas/:id',
    MODEL_PUMA: '/:puma/:id',
    PAGE_ERROR: "/page/error404",
    PAGE_START: "/",
} as const  //что бы нельзя было изменить значение свойства


function App() {
    return (
        <div>
            <S.HeaderWrapper><h1>HEADER</h1></S.HeaderWrapper>
            <S.BodyWrapper>
                <S.NavWrapper>
                    <Links/>
                    {/*<div><NavLink to={PATH.PAGE1}>Adidas</NavLink></div>
                    <div><NavLink to={PATH.PAGE2}>Puma</NavLink></div>
                    <div><NavLink to={PATH.PAGE3}>Abibas</NavLink></div>
                    <div><NavLink to={PATH.PAGE_ERROR}><button>ЕГОГО</button></NavLink></div>*/}
                </S.NavWrapper>
                <S.ContentWrapper>
                    <Routes>
                        {/*<Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>*/}
                        <Route path="/" element={<Start/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        {/*<Route path={PATH.MODEL_ADIDAS} element={<ModelAdidas/>}/>
                        <Route path={PATH.MODEL_PUMA} element={<ModelPuma/>}/>*/}
                        <Route path={PATH.MODEL} element={<Model/>}/>

                        {/*<Route path="/*" element={<Navigate to={PATH.PAGE_ERROR}/>}/>*/}
                        {/*если нам не надо видеть ошибочный адрес*/}

                        <Route path={PATH.PAGE_ERROR} element={<Error404/>}/>
                        {/*если нам надо перенапрвить на адрес Error404*/}

                        <Route path="/*" element={<Error404/>}/>
                        {/*если нам надо видеть ошибочный адрес*/}

                    </Routes>
                </S.ContentWrapper>
            </S.BodyWrapper>
            <S.FooterWrapper>abibas 2023</S.FooterWrapper>
        </div>
    );
}

export default App;
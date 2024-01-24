import React from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles";

const PATH = {
    PAGE1: "/adidas",
    PAGE2: "/puma",
    PAGE3: "/abibas",
    PAGE_ERROR: "/page/error404"
} as const  //что бы нельзя было изменить значение свойства


function App() {
    return (
        <div>
            <S.HeaderWrapper><h1>HEADER</h1></S.HeaderWrapper>
            <S.BodyWrapper>
                <S.NavWrapper>
                    <div ><NavLink to={PATH.PAGE1}>Adidas</NavLink></div>
                    <div><NavLink to={PATH.PAGE2}>Puma</NavLink></div>
                    <div><NavLink to={PATH.PAGE3}>Abibas</NavLink></div>
                </S.NavWrapper>
                <S.ContentWrapper>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        <Route path="/*" element={<Navigate to={PATH.PAGE_ERROR}/>}/>
                        <Route path={PATH.PAGE_ERROR} element={<Error404/>}/>
                        {/*если нам надо перенапрвить на дрес Error404*/}

                        {/*<Route path="/*" element={<Error404/>}/>*/}
                        {/*если нам надо видеть ошибочный адрес*/}

                    </Routes>
                </S.ContentWrapper>
            </S.BodyWrapper>
            <S.FooterWrapper>abibas 2023</S.FooterWrapper>
        </div>
    );
}

export default App;
import React from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={"/adidas"}
                                  className={({isActive}) => isActive ? styles.active : styles.navLink}>Adidas</NavLink>
                    </div>
                    <div><NavLink to={"/puma"}
                                  className={({isActive}) => isActive ? styles.active : styles.navLink}>Puma</NavLink>
                    </div>
                    <div><NavLink to={"/abibas"}
                                  className={({isActive}) => isActive ? styles.active : styles.navLink}>Abibas</NavLink>
                    </div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/adidas"}/>}/>

                        <Route path={"/adidas"} element={<PageOne/>}/>
                        <Route path={"/puma"} element={<PageTwo/>}/>
                        <Route path={"/abibas"} element={<PageThree/>}/>

                        <Route path="/*" element={<Navigate to={"/page/error404"}/>}/>
                        <Route path={"/page/error404"} element={<Error404/>}/>
                        {/*если нам надо перенапрвить на дрес Error404*/}

                        {/*<Route path="/*" element={<Error404/>}/>*/}
                        {/*если нам надо видеть ошибочный адрес*/}

                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;



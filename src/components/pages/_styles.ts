import styled from "styled-components";

const NavWrapper = styled.div`
    margin-left: 20px;
    font-size: 30px;
    
    & > a {
        text-decoration: none;
        color: blue;
    }

    & > a.active {
        text-decoration: none;
        color: aqua;
    }

    & > a:hover {
        color: cornflowerblue;
    }
`

export const S ={
    NavWrapper
}
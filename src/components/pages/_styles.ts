import styled from "styled-components";

const HeaderWrapper = styled.div`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
    border-radius: 60px;
`

const BodyWrapper = styled.div`
    display: flex;
`

const NavWrapper = styled.div`
    background-color: antiquewhite;
    min-height: 400px;
    width: 30%;
    color: #282c34;
    font-size: 30px;
    border-top-left-radius: 60px;

    & > div {
       text-align: center;
        font-size: 30px;
    }

    & > div > a {
        text-decoration: none;
        color: blue;
    }

    & > div > a.active {
        text-decoration: none;
        color: aqua;
    }

    & > div > a:hover {
        color: cornflowerblue;
    }
`

const ContentWrapper = styled.div`
    background-color: #282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
    border-top-right-radius: 60px;
`

const FooterWrapper = styled.div`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
    border-radius: 0 0 60px 60px;
`

export const S = {
    NavWrapper,
    ContentWrapper,
    FooterWrapper,
    BodyWrapper,
    HeaderWrapper
}
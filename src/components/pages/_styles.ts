import styled from "styled-components";

const HeaderWrapper = styled.div`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

const BodyWrapper = styled.div`
    display: flex;
`

const NavWrapper = styled.div`
    background-color: white;
    min-height: 400px;
    width: 30%;
    color: #282c34;
    font-size: 30px;

    & > div {
        margin-left: 20px;
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
`

const FooterWrapper = styled.div`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`

export const S = {
    NavWrapper,
    ContentWrapper,
    FooterWrapper,
    BodyWrapper,
    HeaderWrapper
}
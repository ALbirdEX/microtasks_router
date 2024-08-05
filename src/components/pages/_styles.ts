import styled from "styled-components";

const HeaderWrapper = styled.div`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
    border-radius: 30px 30px 0 0;
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
        border-radius: 25px;
    }

    & > div > a > button {
        margin-top: 10px;
        width: 150px;
        height: 75px;
        background: #7fc5ff;
        border-radius: 25px;
        font-size: xx-large;
    }

    & > div > a > button:hover {
        background: rgb(93, 115, 140);
    }
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
    padding-top: 20px;
    padding-left: 20px;

    & > div > h2 {
        text-align: center;
    }
    
    & > div > a > img {
        width: 270px;
        height: auto;
        padding-left: 2ch;
    }

`

const FooterWrapper = styled.div`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
    border-radius: 0 0 30px 30px;
`

const ImagesWrapper= styled.div`
    display: flex;
    justify-content: center;

    & > img {
        width: 270px;
        height: auto; 
        padding-right: 20px
    }
`

export const S = {
    NavWrapper,
    ContentWrapper,
    FooterWrapper,
    BodyWrapper,
    HeaderWrapper,
    ImagesWrapper
}
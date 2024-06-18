import styled from "styled-components"

export const Body = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
`

export const Header = styled.div`
    width: 100%;
    height: 97vh;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${props => props.$nightMode && "#1D2337"};
    transition: all 0.3s ease-in-out;

    &::before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 18vh;
        background-color: #fff;
        z-index: -1;
    }
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 82vh;
        background: linear-gradient(#fff 30%, #F2EFFF);
        z-index: -1;
        border-bottom: 1px solid #D7CAEF;
    }

    @media screen and (max-width: 850px) {
        height: auto;
        row-gap: 20px;
        &::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: linear-gradient(#fff 50%, #F2EFFF);
            z-index: -1;
            border-bottom: 1px solid #D7CAEF;
        }
    }
`

export const BodyFirstPart = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    background-color: ${props => props.$nightMode && "#1D2337"};
    transition: all 0.3s ease-in-out;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5vh;
        background-color: #fff;
        z-index: -5;
    }
    &::after{
        content: "";
        position: absolute;
        top: 5vh;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#F0EFFF, #fff 50%);
        z-index: -5;
        border-top: 1px solid #D7CAEF;
    }
`

export const BodySecondPart = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    background-color: ${props => props.$nightMode && "#1D2337"};
    transition: all 0.3s ease-in-out;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5vh;
        background-color: #fff;
        z-index: -5;
    }
    &::after{
        content: "";
        position: absolute;
        top: 5vh;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -5;
        border-top: 1px solid #D7CAEF;
        background: ${props => props.$nightMode ? "#CCD6F6" : "linear-gradient(#EDF3FF, #fff 70%)"};
    }
`
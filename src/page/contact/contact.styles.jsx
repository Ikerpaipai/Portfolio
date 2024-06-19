import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.$nightMode && "#1D2337"};
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#FFFFFF 10%, #DFE2FF);
        z-index: -1;
    }

    @media screen and (max-width: 850px) {
        height: auto;
    }
`

export const TitleContainer = styled.div`
    height: 30%;
    padding-top: 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1450px) {
        padding-top: 60px;
    }
`

export const Title = styled.h1`
    display: inline;
    font-size: 2vw;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#475569"};
    transition: all 0.3s ease-in-out;
    z-index: 15;

    @media screen and (max-width: 1450px) {
        font-size: 24px;
    }
`
export const SubTitle = styled.h2`
    display: inline;
    width: 70%;
    font-size: 1.3vw;
    font-weight: 100;
    text-align: center;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#475569"};
    margin: 10px 0 ;
    transition: all 0.3s ease-in-out;
    z-index: 15;

    @media screen and (max-width: 1450px) {
        font-size: 16px;
    }

    @media screen and (max-width: 650px) {
        width: 90%;
    }
`

export const SpanSubTitle = styled.span`
    font-weight: bold;
    color: ${props => props.$nightMode ? "#64FFDA" : "#7C3AED"};
    transition: all 0.3s ease-in-out;
    z-index: 15;
`

export const FlexContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;

    @media screen and (max-width: 850px) {
        flex-wrap: wrap;
    }
`

export const ImageSection = styled.div`
    width: 50%;
    height: 100%;
    overflow: hidden;
    z-index: 15;
    svg{
        transform: translate(-100px, 0px);
        width: 100%;
        height: auto;
        opacity: ${props => props.$nightMode && "0.7"};
        transition: all 0.3s ease-in-out;
    }

    @media screen and (max-width: 850px) {
        width: 100%;
        height: 250px;
        position: relative;
        svg{
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: 50%;
        }
    }
`

export const FormSection = styled.div`
    width: 50%;
    height: 100%;
    padding: 10px;
    z-index: 15;

    @media screen and (max-width: 850px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(12vw + 1.5vw);

    @media screen and (max-width: 1450px) {
        height: calc(110px + 20px);        
    }
`

export const Input = styled.textarea`
    width: 100%;
    height: 12vw;
    padding: 0.5vw 0.5vw;
    font-size: 1.1vw;
    border: none;
    background-color: ${props => props.$nightMode ? "#183340" : "#F2EFFF"};
    color: ${props => props.$nightMode && "#64FFDA"};
    border-radius: 0.5vw;
    outline: none;
    resize: none;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1450px) {
        height: 110px;
        padding: 7px 5px;
        font-size: 14px;
        border-radius: 5px;        
    }
`

export const ErrorInfo = styled.span`
    width: 100%;
    height: 5%;
    color: ${props => props.$nightMode ? "#64FFDA" : "#7C3AED"};
    font-weight: bold;
    font-size: 1vw;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1450px) {
        font-size: 14px;       
    }
`
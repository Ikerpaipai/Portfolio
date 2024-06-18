import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: ${props => props.$required ? "50px" : "auto"};
    margin-bottom: 10px;
`

export const Input = styled.input`
    width: 100%;
    height: auto;
    padding: 7px 5px;
    font-size: 14px;
    border: none;
    background-color: ${props => props.$nightMode ? "#183340" : "#F2EFFF"};
    color: ${props => props.$nightMode && "#64FFDA"};
    border-radius: 5px;
    outline: none;
    transition: all 0.3s ease-in-out;
`

export const ErrorInfo = styled.span`
    width: 100%;
    height: 5%;
    color: ${props => props.$nightMode ? "#64FFDA" : "#7C3AED"};
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
`
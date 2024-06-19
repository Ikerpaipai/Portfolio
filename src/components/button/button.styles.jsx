import styled from "styled-components";

export const BaseButton = styled.button`
    font-size: 1vw;
    font-weight: bold;
    padding: 0.5vw 5vw;
    border-width: 0.15vw;
    border-style: solid;
    border-image: ${props => !props.$nightMode && "linear-gradient(90deg, #001DB4, #4254b5 20%,#858DB6) 1"};
    border: ${props => props.$nightMode && "2px solid #4254b5"};
    background-color: ${(props)=>props.$nightMode ? "#4254b5" : "transparent"};
    color: ${props => props.$nightMode ? "#D7E4F8" : "#4254b5"};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: ${props => props.$nightMode ? "#183340" : "#4254b5"};
        border: ${props => props.$nightMode && "2px solid #183340"};
        border-image: ${props => !props.$nightMode && "linear-gradient(90deg, #4254b5, #4254b5 20%,#4254b5) 1"};
        color: ${props => props.$nightMode ? "#64FFDA" : "#fff"};
    }

    @media screen and (max-width: 1450px) {
        font-size: 16px;
        padding: 10px 70px;
        border-width: 2px;
    }

    @media screen and (max-width: 850px) {
        font-size: 14px;
        padding: 10px 50px;
    }
`

export const SectionButton = styled.button`
    text-decoration: none;
    position: relative;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    font-family: Arial;
    color: #fff;
    font-size: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -7%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background-color: #858DB6;
        border-radius: 40px;
        z-index: -1;
    }

    &.active::before{
        width: 115%;
    }

    &:hover::before {
        width: 115%;
        transition: width 0.6s;
    }
`

export const FormButton = styled.button`
    font-size: 1vw;
    font-weight: bold;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#334155"};
    padding: 0.4vw 2vw;
    border-radius: 0.5vw;
    background-color: ${props => props.$nightMode ? "#112240" : "#F2EBFF"};
    box-shadow: inset 0 0 0.3vw #7C3AED;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        color: #F2EBFF;
        background-color: #7C3AED;
    }

    @media screen and (max-width: 1450px) {
        font-size: 14px;
        padding: 10px 30px;
        border-radius: 10px;
        box-shadow: inset 0 0 4px #7C3AED;
    }
`
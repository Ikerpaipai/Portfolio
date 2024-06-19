import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;

    @media screen and (max-width: 850px) {
        flex-wrap: wrap-reverse;
    }
`

export const LeftSection = styled.div`
    width: 60%;
    height: auto;
    padding: 20px;
    padding-left: 100px;
    z-index: 15;

    @media screen and (max-width: 850px) {
        width: 100%;
        padding-left: 20px;
    }
`

export const RightSection = styled.div`
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 15;

    @media screen and (max-width: 850px) {
        width: 100%;
        padding-top: 20px;
    }
`

export const Barre = styled.hr`
    width: 20%;
    height: 5px;
    background-color: ${props => props.$nightMode? "#64FFDA" : "#7C3AED"};
    margin-top: 6vw;
    border: none;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1450px) {
        margin-top: 60px;
    }
`

export const Title = styled.h3`
    color: ${props => props.$nightMode ? "#D7E4F8" : "#334155"};
    font-size: 3vw;
    margin: 3vw 0;
    transition: all 0.3s ease-in-out;


    @media screen and (max-width: 1450px) {
        font-size: 38px;
        margin: 25px 0;
    }

    @media screen and (max-width: 850px) {
        font-size: 24px;
    }
`

export const Paragraphe = styled.p`
    font-size: 1.2vw;
    color: ${props => props.$nightMode? "#D7E4F8" : "#475569"};
    margin-bottom: 1.2vw;
    text-align: justify;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1450px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`

export const KeyWord = styled.span`
    color: ${props => props.$nightMode ? "#64FFDA" : "#7C3AED"};
    font-weight: bold;
    transition: all 0.3s ease-in-out;
`

export const ImageContainer = styled.div`
    width: 18vw;
    height: 18vw;
    border-radius: 50%;
    background-color: gray;
    margin-top: 7vw;
    border: ${props => props.$nightMode && "1px solid #64FFDA"};
    box-shadow: ${props => props.$nightMode && "0 0 1vw #64FFDA"};
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1450px) {
        width: 250px;
        height: 250px;
        border-radius: 300px;
        margin-top: 60px;
        box-shadow: ${props => props.$nightMode && "0 0 10px #64FFDA"};
    }
`

export const Info = styled.span`
    display: block;
    color: ${props => props.$nightMode ? "#64FFDA" : "#475569"};
    margin-top: 20px;
    transition: all 0.3s ease-in-out;
    font-size: 1.5vw;

    @media screen and (max-width: 1450px) {
        font-size: 16px;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 1vw;
    margin-top: 0.5vw;

    @media screen and (max-width: 1450px) {
        column-gap: 10px;
        margin-top: 5px;
    }
`

export const ExperienceContainer = styled.div`
    margin-top: 4vw;
    padding: 15px 30px;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#334155"};
    font-size: 1.5vw;
    font-weight: bold;
    background-color: ${props => props.$nightMode ? "#2E3649" : "#F2EBFF"};
    border-radius: 10px;
    box-shadow:  ${props => props.$nightMode ? "inset 0 0 4px #656565": "inset 0 0 4px #7C3AED"};
    transition: all 0.3s ease-in-out;

    span{
        font-size: 3vw;
    }

    @media screen and (max-width: 1450px) {
        font-size: 18px;
        margin-top: 30px;

        span{
            font-size: 36px;
        }
    }
`

export const Number = styled.span`
        color: ${props => props.$nightMode ? "#64FFDA" : "#7C3AED"};
        transition: all 0.3s ease-in-out;
`
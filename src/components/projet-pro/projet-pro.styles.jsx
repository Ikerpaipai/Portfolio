import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    width: 900px;
    height: 250px;
    flex-direction: ${(props)=>props.$reverse ? "row-reverse" : "row"};

    @media screen and (max-width: 1100px) {
        flex-direction: column;
        width: 100%;
        height: 400px;
    }
`

export const ImageSection = styled.div`
    width: 50%;
    height: 100%;
    background-color: black;
    background-image: ${props => props.$image};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
    z-index: -1;
    position: relative;
    
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: ${props => props.$nightMode ? "#64FFDA" : "grey"};
        opacity: 0.4;
        transition: all 0.3s ease-in-out;
    }

    @media screen and (max-width: 1100px) {
        width: 100%;
        height: 60%;
    }
`

export const InfoSection = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${(props)=>props.$reverse ? "start" : "end"};

    @media screen and (max-width: 1100px) {
        width: 100%;
        height: auto;
        align-items: center;
        position: relative;
    }
`

export const Title = styled.h3`
    background: ${props => props.$nightMode ? "#CCD6F6" : "linear-gradient(90deg, #50577B 20%,#929EE1)"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 24px;
    height: 15%;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1100px){
        display: none;
    }
`

export const TitleResponsive = styled.h3`
    display: none;
    color: ${props => props.$nightMode ? "#CCD6F6" : "#475373"};
    font-size: 24px;
    margin-bottom: 10px;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1100px){
        display: block;
    }
`

export const InfoContainer = styled.div`
    width: 120%;
    height: 70%;
    padding: 20px;
    background-color: ${props => props.$nightMode ? "#112240" : "#F8F9FD"};
    border-radius: 5px;
    box-shadow: 4px 4px 10px -6px black;
    transition: all 0.3s ease-in-out;

    
    @media screen and (max-width: 1100px) {
        width: 90%;
        height: auto;
        padding: 5px 15px;
        position: absolute;
        top: -70px;
    }
    @media screen and (max-width: 450px) {
        width: 90%;
        height: auto;
        padding: 5px 15px;
        position: absolute;
        top: -120px;
    }
`

export const IconContainer = styled.div`
    height: 15%;
`

export const Info = styled.p`
    font-size: 16px;
    color: ${props => props.$nightMode ? "#929CBC" : "#475373"};
    transition: all 0.3s ease-in-out;
`

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 5px;
    column-gap: 10px;
    margin: 3% 0;
`

export const VoirPlus = styled.span`
    font-size: 13px;
    font-weight: bold;
    color: ${props => props.$nightMode ? "#64FFDA" : "#475373"};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        text-decoration: underline;
    }
`
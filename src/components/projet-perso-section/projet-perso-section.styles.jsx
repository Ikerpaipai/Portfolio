import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 40vw;
    display: flex;
    flex-direction: column;
    position: relative;

    @media screen and (max-width: 1450px) {
        height: 500px;
    }
`

export const TitleContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    row-gap: 2px;
    z-index: 15;
    opacity: 0;
    transform: translateY(-15px);
    transition: all 1s ease-in-out;

    &.active{
        opacity: 1;
        transform: translateY(0);
    }
`

export const ProjectContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateX(-70px);
    transition: all 1.5s ease-in-out 0.3s;
    z-index: 15;

    &.active{
        opacity: 1;
        transform: translateX(0);
    }

    @media screen and (max-width: 650px) {
        overflow-x: scroll;
        padding: 0 30px;
        justify-content: start;
        scrollbar-width: none;
        transform: translateX(70px);
    }
`

export const Line = styled.div`
    position: absolute;
    top: -2px;
    right: 15%;
    width: 0%;
    height: 0%;
    border-right: ${props => props.$nightMode ? "0.15vw solid #64FFDA" : "0.15vw solid #7C3AED"};
    border-bottom: ${props => props.$nightMode ? "0.15vw solid #64FFDA" : "0.15vw solid #7C3AED"};
    z-index: 13;

    @media screen and (max-width: 1450px) {
        border-right: ${props => props.$nightMode ? "1.5px solid #64FFDA" : "2px solid #7C3AED"};
        border-bottom: ${props => props.$nightMode ? "1.5px solid #64FFDA" : "2px solid #7C3AED"};
    }

    @media screen and (max-width: 650px) {
        display: none;
    }
`

export const Title = styled.h4`
    font-size: 2.7vw;
    font-weight: 100;
    color: ${props => props.$nightMode ? "#CCD6F6" : "#64748B"};

    @media screen and (max-width: 1450px) {
        font-size: 34px;
    }
`
export const TitleSpan = styled.span`
    font-size: 2.7vw;
    color: #334155;
    font-weight: 600;
    border-radius: 5px;
    padding: 0px 4px;
    background-color: #EFEFEF;
    margin-left: 5px;

    @media screen and (max-width: 1450px) {
        font-size: 34px;
    }
`

export const SubTitle = styled.h5`
    width: 40%;
    font-size: 1.3vw;
    color: ${props => props.$nightMode ? "#CCD6F6" : "#64748B"};
    text-align: center;

    @media screen and (max-width: 1450px) {
        font-size: 18px;
    }

    @media screen and (max-width: 650px) {
        width: 80%;
    }
`
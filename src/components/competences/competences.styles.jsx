import styled from "styled-components";

export const Title = styled.h4`
    position: relative;
    color: ${props => props.$nightMode ? "#64FFDA" : "#7B8390"};
    font-size: 2vw;
    font-weight: bold;
    margin: 1vw 0 3vw 0;
    transition: all 0.3s ease-in-out;
    z-index: 15;

    @media screen and (max-width: 1450px) {
        font-size: 24px;
        margin: 30px 0;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 850px) {
        flex-wrap: wrap;
    }
`

export const LeftSection = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    z-index: 15;

    @media screen and (max-width: 850px) {
        width: 100%;
        justify-content: start;
    }
`
export const RightSection = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    z-index: 15;

    @media screen and (max-width: 850px) {
        width: 100%;
        justify-content: start;
    }
`
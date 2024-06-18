import styled from "styled-components";

export const SectionContainer = styled.div`
    position: relative;
    width: 100%;
    height: 850px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 20;

    @media screen and (max-width: 1100px) {
        height: 1050px;
    }

    @media screen and (max-width: 850px) {
        margin-top: 30px;
        height: auto;
    }
`
export const HeadBlocLine = styled.div`
    display: flex;
    justify-content: center;
    width: 0%;
    height: 0%;
    border-bottom: ${props => props.$nightMode ? "1.5px solid #64FFDA" : "2px solid #7C3AED"};
    position: relative;
    z-index: 13;

    @media screen and (max-width: 850px) {
        display: none;
    }
`
export const LigneVerticale = styled.div`
    width: 1.5px;
    height: 100%;
    border-right: ${props => props.$nightMode ? "1.5px solid #64FFDA" : "2px solid #7C3AED"};
    z-index: 13;
`

export const BodyLineSection = styled.div`
    width: ${(props)=> props.$width};
    height: 93%;
    display: flex;
    z-index: 13;

    @media screen and (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }
`

export const LeftLineContainer = styled.div`
    width: 50%;
    height: auto;

    @media screen and (max-width: 850px) {
        width: 100%;
        height: 50%;
        position: inherit;
        display: flex;
        justify-content: center;
    }
`
export const RightLineContainer = styled.div`
    width: 50%;
    height: auto;

    @media screen and (max-width: 850px) {
        width: 100%;
        height: 50%;
    }
`

export const LeftLine = styled.div`
    width: 100%;
    height: 0%;
    position: relative;
    border-left: ${props => props.$nightMode ? "1.5px solid #64FFDA" : "2px solid #7C3AED"};

    @media screen and (max-width: 850px) {
        display: none;
    }
`

export const RightLine = styled.div`
    width: 100%;
    height: 0%;
    border-right: ${props => props.$nightMode ? "1.5px solid #64FFDA" : "2px solid #7C3AED"};
    position: relative;

    @media screen and (max-width: 850px) {
        display: none;
    }
`

export const ProjetContainer = styled.div`
    position: absolute;
    right: ${(props)=>props.$reverse ? "50px" : "none"};
    left: ${(props)=>props.$reverse ? "none" : "50px"};
    opacity: 0;
    transition: all 1s ease-in-out;
    
    &.active{
        opacity: 1;
    }

    @media screen and (max-width: 1100px) {
        width: 500px;
        position: absolute;
        right: ${(props)=>props.$reverse ? "50px" : "none"};
        left: ${(props)=>props.$reverse ? "none" : "50px"};
    }

    @media screen and (max-width: 850px) {
        width: 100%;
        position: inherit;
    }

    @media screen and (max-width: 450px) {
        margin-bottom: ${props => props.$marginBottom};
    }
`
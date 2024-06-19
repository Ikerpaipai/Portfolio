import styled from "styled-components";
import BackgroundCube from "../../assets/background/vecteur-cube.png"

export const SectionsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 90vw;
    display: flex;
    background-color: ${props => props.$nightMode && "#1D2337"};
    transition: all 0.3s ease-in-out;

    &::after{
        content: "";
        position: absolute;
        top: -14vh;
        left: 0;
        width: 100%;
        height: calc(100% + 14vh + 5vh);
        background-image: url(${BackgroundCube});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
        animation: BodyBackgroundOpacity 0.3s ease-in-out;

        @keyframes BodyBackgroundOpacity {
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 1450px) {
        height: 900px;
    }

    @media screen and (max-width: 850px) {
        justify-content: center;
        height: auto;
        padding: 10px 0;
    }
`

export const LineSection = styled.div`
    width: 15%;
    height: 0%;
    border-right: ${props => props.$nightMode ? "0.15vw solid #64FFDA" : "0.15vw solid #7C3AED"};
    position: relative;
    z-index: 14;

    @media screen and (max-width: 1450px) {
        border-right: ${props => props.$nightMode ? "1.5px solid #64FFDA" : "2px solid #7C3AED"};
    }
    @media screen and (max-width: 850px) {
        display: none;
    }
`

export const Services = styled.div`
    width: 70%;
    height: 100%;
    padding: 0 35px;
    z-index: 14;

    @media screen and (max-width: 850px) {
        width: 90%;
        padding: 0;
    }
`

export const LineHorizontalContainer = styled.div`
    width: 15%;
    position: relative;
    z-index: 13;

    @media screen and (max-width: 850px) {
        display: none;
    }
`

export const LineHorizontal = styled.div`
    width: 0%;
    position: absolute;
    top: ${(props) => props.$top};
    height: 1px;
    border-bottom: ${props => props.$nightMode ? "0.15vw solid #64FFDA" : "0.15vw solid #7C3AED"};

    @media screen and (max-width: 1450px) {
        border-bottom: ${props => props.$nightMode ? "1.5px solid #64FFDA" : "2px solid #7C3AED"};
    }
`
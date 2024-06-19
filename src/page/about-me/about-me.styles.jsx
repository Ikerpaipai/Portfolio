import styled from "styled-components";
import BackgroundCube from "../../assets/background/vecteur-cube.png"

export const Header = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.$nightMode && "#1D2337"};
    transition: all 0.3s ease-in-out;
    position: relative;
    border-bottom: ${props => !props.$nightMode && "1px solid #CBCBCB"};

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#fff, #F2EFFF);
        z-index: -1;
    }

    @media screen and (max-width: 1450px) {
        height: auto;
    }
`

export const Body = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.$nightMode && "#1D2337"};
    padding: 10px 8vw;
    transition: all 0.3s ease-in-out;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${BackgroundCube});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
    }
`
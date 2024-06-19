import styled from "styled-components";
import FlashLogo from "../../assets/logo-divers/flash.svg?react"

export const Transition = styled.div`
    opacity: 0;
    transform: translateY(-15px);
    transition: all 1s ease-in-out;
    position: absolute;
    top: ${(props) => props.$top};

    &.active{
        opacity: 1;
        transform: translateY(0);
    }

    @media screen and (max-width: 850px) {
        position: inherit;
        margin: 40px 0;
        transform: translateY(30px);
    }
`

export const Container = styled.div`
    display: flex;
    width: 95%;
    height: auto;
    background-color: ${props => props.$nightMode ? "#transparent" : "#fff"};
    position: relative;
    border-radius: 20px;

    &::before, &::after {
        position: absolute;
        content: "";
        z-index: -1;
    }

    &::before{
        top: -3px;
        left: -3px;
        width: 30%;
        height: 50%;
        border-radius: 23px 0 0 0;
        background: ${props => props.$nightMode ? "transparent" : "linear-gradient(90deg, #7C3AED, #7C3AED 20%,#C9CFEB)"};
    }

    &::after{
        bottom: -3px;
        right: -3px;
        width: 30%;
        height: 50%;
        border-radius: 0 0 23px 0;
        background: ${props => props.$nightMode ? "transparent" : "linear-gradient(90deg, #C0C5DF,#DCDFEE)"};
    }

    @media screen and (max-width: 850px) {
        width: 100%;
    }
`

export const InfoSection = styled.div`
    width: 75%;
    height: 100%;
    padding: 15px;
    background-color: ${props => props.$nightMode ? "transparent" : "#fff"};
    border-radius: 20px;

    @media screen and (max-width: 850px) {
        width: 100%;
    }
`

export const ImageSection = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.$nightMode ? "transparent" : "#fff"};
    border-radius: 20px;
    
    svg{
        width: 10vw;
        height: auto;
        fill: ${props => props.$nightMode ? "#117B68" : "#DCDFEE"};
        transition: all 0.3s ease-in-out;

        @media screen and (max-width: 1450px) {
            width: 130px;
        }
    }

    @media screen and (max-width: 850px) {
        display: none;
    }
`

export const Title = styled.h3`
    font-size: 1.7vw;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#7C3AED"};
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1450px) {
        font-size: 18px;
    }
`

export const Info = styled.p`
    font-size: 1.3vw;
    margin-top: 10px;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#334155"};
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1450px) {
        font-size: 16px;
    }
`

export const Logo = styled(FlashLogo)`
    width: auto;
    height: 2vw;
    margin-right: 5px;

    @media screen and (max-width: 1450px) {
        height: 25px;
    }
`
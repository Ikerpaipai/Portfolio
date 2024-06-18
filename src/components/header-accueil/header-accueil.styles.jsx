import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80%;
    position: relative;
    z-index: 15;

    @media screen and (max-width: 850px) {
        height: 100vh;
    }
`

export const TitleContainer = styled.div`
    width: 550px;
    position: absolute;
    top: 50%;
    margin-left: 20vw;
    transform: translateY(-50%);
    z-index: 15;

    @media screen and (max-width: 850px) {
        margin-left: 0;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 0 7vw;
    }
    @media screen and (max-width: 600px) {
        width: 431px;
    }
    @media screen and (max-width: 600px) {
        width: 380px;
    }
`

export const Title = styled.h1`
    font-size: 34px;
    opacity: 0;
    color: ${props => props.$colorText ? "#D7E4F8" : "#334155"};
    transition: all 0.3s ease-in-out;
    animation: animTitle 1s ease-in-out 0.3s forwards;

    @keyframes animTitle {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }        
    }

    @media screen and (max-width: 750px) {
        font-size: 28px;
    }
    @media screen and (max-width: 400px) {
        font-size: 26px;
    }
`

export const ColorText = styled.span`
    background: linear-gradient(90deg, #001DB4, #4254b5 20%,#858DB6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

export const SubTitle = styled.h2`
    opacity: 0;
    font-size: 20px;
    font-weight: 100;
    margin: 20px 0;
    color: ${props => props.$colorText ? "#D7E4F8" : "#334155"};
    transition: all 0.3s ease-in-out;
    animation: animSubTitle 1s ease-in-out 0.7s forwards;

    @keyframes animSubTitle {
        from {
            opacity: 0;
            transform: translateY(15px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }        
    }

    @media screen and (max-width: 750px) {
        font-size: 16px;
    }
`

export const AnimationButton = styled.div`
    opacity: 0;
    animation: button 1s ease-in-out 0.8s forwards;

    @keyframes button {
        from {
            opacity: 0;
            transform: translateY(15px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }       
    }
`
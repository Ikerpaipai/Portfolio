import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.div`
    width: 100%;
    height: 4.5vw;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    background-color: ${props => props.$colorNav? "#1D2337" : "#fff"};
    z-index: 999;
    transition: all 0.3s ease-in-out;
    animation: nav 1s ease-in-out;
    overflow: hidden;

    &.hidden {
        transform: translateY(-100%);
    }

    &.active {
        transform: translateY(0);
    }

    @keyframes nav {
        from{
            transform: translateY(-100%);
        }
        to{
            transform: translateY(0);
        }
    }
    
    @media screen and (max-width: 650px) {
        overflow: inherit;
    }
`

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2vw;
    margin-right: 1vw;
    color: ${props => props.$colorText ? "#D7E4F8" : "#334155"};
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 575px) {
        column-gap: 20px;
        margin-right: 10px;
    }
`

export const NavLink = styled(Link)`
    cursor: pointer;
    z-index: 15;
    font-size: 1.2vw;

    @media screen and (max-width: 575px) {
        font-size: 16px;
    }

    @media screen and (max-width: 575px) {
        display: none;
    }
`

export const NavLinkResponsive = styled(Link)`
    cursor: pointer;
    font-size: 24px;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#334155"};
    transition: all 0.3s ease-in-out;
`

export const Separateur = styled.hr`
    width: 70%;
    height: 2px;
    background-color: ${props => props.$nightMode ? "#64FFDA" : "#7C3AED"};
    border: none;
    opacity: 0;
    transition: all 0.3s ease-in-out 0.2s;

    @media screen and (max-width: 575px) {
        &.active{
            opacity: 1;
        }
    }
`

export const Burger = styled.div`
    display: none;
    @media screen and (max-width: 575px) {
        display: block;
    }
`

export const BurgerContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 0%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 998;
    background-color: ${props => props.$nightMode ? "#1D2337" : "#fff"};
    transition: all 0.3s ease-in-out;
    animation: start 1s ease-in-out;

    &.active{
        height: 100%;
    }
`

export const Row = styled.div`
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 15;
    opacity: 0;
    transition: all 0.3s ease-in-out 0.2s;

    @media screen and (max-width: 575px) {
        &.active{
            opacity: 1;
        }
    }
`
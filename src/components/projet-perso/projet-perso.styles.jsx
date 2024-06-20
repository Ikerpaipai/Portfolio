import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
    width: 3.3vw;
    height: 20vw;
    transition: width 0.3s ease-in-out;
    z-index: 15;
    perspective: 1000px;
    position: relative;
    cursor: pointer;

    &.active {
        width: 30vw;
        cursor: inherit;
    }

    @media screen and (max-width: 1450px) {
        width: 55px;
        height: 250px;

        &.active {
            width: 400px;
        }
    }
`;

export const CardInner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;

    &.flipped {
        transform: rotateY(180deg);
    }
`;

export const CardFront = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1.2vw;
    position: absolute;
    backface-visibility: hidden;
    background-image: ${props => props.$image};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    box-shadow: ${props => props.$nightMode ? "inset 0 0 6px #656565" : "inset 0 0 6px #BDC1C9"};

    &::before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background-color: #64748B;
    }

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 80%;
        background-color: grey;
        opacity: ${props => props.$nightMode ? "0.6" : "0.4"};
        transition: opacity 0.3s ease-in-out;
    }

    &.active:hover .link-web {
        opacity: 1;
        transform: translate(-50%, 0px);
        cursor: pointer;
    }

    @media screen and (max-width: 1450px) {
        border-radius: 20px;
    }
`;

export const LinkWeb = styled(Link)`
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, 30px);
    z-index: 1;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    cursor: inherit;
`

export const CardBack = styled(CardFront)`
    background-color: ${props => props.$nightMode ? "#112240" : "#DCDFEE"};
    transform: rotateY(180deg);
    padding: 1.4vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    &::before{
        background-color: transparent;
    }
    &::after{
        background-color: transparent;
    }

    @media screen and (max-width: 1450px) {
        padding: 20px;
    }
`;

export const BottomSection = styled.div`
    width: 100%;
    height: 15%;
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    justify-content: space-between;
    opacity: 1;

    &.active{
        opacity: 0;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 20;

    @media screen and (max-width: 1450px) {
        width: 400px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1vw;

    @media screen and (max-width: 1450px) {
        column-gap: 10px;
    }
`

export const NumberContainer = styled.div`
    min-width: 2.5vw;
    min-height: 2.5vw;
    width: 2.5vw;
    height: 2.5vw;
    border-radius: 50%;
    font-size: 1.5vw;
    background-color: ${props => props.$nightMode ? "" : "#223"};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.$nightMode ? "" : "#fff"};

    @media screen and (max-width: 1450px) {
        min-width: auto;
        min-height: auto;
        width: 35px;
        height: 35px;
        border-radius: 50px;
        font-size: 16px;
    }
`;

export const Detail = styled.span`
    color: ${props => props.$nightMode ? "#D7E4F8" : "#fff"};
    margin-right: 30px;
    cursor: pointer;
    font-size: 1vw;
    width: 6vw;

    @media screen and (max-width: 1450px) {
        font-size: 14px;
        width: 70px;
    }
`

export const Title = styled.h4`
    color: ${props => props.$nightMode ? "#D7E4F8" : "#fff"};
    font-size: 1.3vw;
    width: 20vw;

    @media screen and (max-width: 1450px) {
        font-size: 16px;
        width: 200px;
    }
`

export const SubTitle = styled.p`
    color: ${props => props.$nightMode ? "#D7E4F8" : "#fff"};
    font-size: 1vw;
    @media screen and (max-width: 1450px) {
        font-size: 14px;
    }
`

export const Info = styled.p`
    color: ${props => props.$nightMode ? "#929CBC" : "#475373"};
    font-size: 1.1vw;
    @media screen and (max-width: 1450px) {
        font-size: 16px;
    }
`

export const StackTitle = styled.span`
    display: block;
    font-weight: bold;
    color: ${props => props.$nightMode ? "#CCD6F6" : "#475373"};
    font-size: 1.3vw;
    @media screen and (max-width: 1450px) {
        font-size: 16px;
    }
`

export const TagContainer = styled.div`
    display: flex;
    column-gap: 10px;
    row-gap: 10px;
    flex-wrap: wrap;
    margin-top: 5px;
`

export const BottomBackContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Backflip = styled.span`
    color: ${props => props.$nightMode ? "#64FFDA" : "#475373"};
    font-size: 1vw;

    @media screen and (max-width: 1450px) {
        font-size: 14px;
    }
`
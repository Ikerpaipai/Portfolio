import { Link } from "react-router-dom";
import styled from "styled-components";

export const FlexContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 12vw;
    margin-left: 2vw;
    z-index: 15;

    @media screen and (max-width: 1450px) {
        width: 150px;
        margin-left: 20px;
    }
`

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    column-gap: 5px;
`

export const Title = styled.span`
    font-size: 2vw;
    font-weight: 400;
    font-family: "Kaushan Script", cursive;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#334155"};
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1450px) {
        font-size: 28px;
    }
`

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    column-gap: 2px;
`
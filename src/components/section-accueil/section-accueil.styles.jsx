import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    height: 130px;
    border: ${props => props.$nightMode ? "none" : "1px solid #D7CAEF"};
    border-radius: 15px;
    background-color: ${props => props.$nightMode ? "#2E3649" : "#fff"};
    box-shadow: ${props => props.$nightMode ? "inset 0 0 4px #656565" : "inset 0 0 4px #B898EF"};
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 15;

    &:hover{
        transform: scale(1.1);
    }

    @media screen and (max-width: 850px) {
        display: ${(props => props.$active ? "block" : "none")};
        width: 90%;
        height: 110px;
        border-radius: 10px;
        padding-top: 14px;

        &:hover{
            transform: none;
            box-shadow: none;
        }
    }
`

export const HeadContainer = styled.div`
    width: 100%;
    height: 30%;
    position: relative;
    margin-bottom: 15px;
    margin-top: 5px;

    @media screen and (max-width: 700px) {
        margin-bottom: 20px;
    }
`

export const CircleLogo = styled.div`
    width: 44px;
    height: 44px;
    background-color: ${(props)=>props.$nightMode ? "#183340" : props.$circleColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -8px;
    left: 0;
    padding: 7px;
    transition: all 0.3s ease-in-out;
    svg{
        width: 100%;
        height: auto;
        fill: ${(props)=>props.$nightMode ? "#64FFDA" : "white"};
        transition: all 0.3s ease-in-out;
    }
`

export const TitleContainer = styled.div`
    background-color: ${props => props.$nightMode ? "#183340" : props.$containerColor};
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 55px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.$nightMode ? "#64FFDA" : "#334155" };
    transition: all 0.3s ease-in-out;
`

export const Info = styled.p`
    font-size: 16px;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#334155"};

    @media screen and (max-width: 450px) {
        font-size: 14px;
    }
`
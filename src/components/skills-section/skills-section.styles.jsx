import styled from "styled-components";

export const Title = styled.h4`
    position: relative;
    margin-top: 7vw;
    margin-bottom: 3vw;
    color: ${props => props.$nightMode ? "#64FFDA" : "#7B8390"};
    font-size: 2vw;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    z-index: 15;

    @media screen and (max-width: 1450px) {
        font-size: 24px;
        margin-top: 70px;
        margin-bottom: 30px;
    }
`

export const SkillsContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 30px 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 20px;

    @media screen and (max-width: 1100px) {
        padding: 30px 0;
    }
`
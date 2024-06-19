import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5vw;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#7C3AED"};
    margin-bottom: 0.5vw;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    font-size: 1.3vw;

    &.active{
        animation: translate 0.7s ease-in-out ${props => props.$delay} forwards;
    
        @keyframes translate {
            from{
                transform: translate(-30px, -15px);
                opacity: 0;
            }
            to{
                transform: translate(0, 0);
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 1450px) {
        font-size: 16px;
        column-gap: 5px;
        margin-bottom: 5px;
    }
`
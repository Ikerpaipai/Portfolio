import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#7C3AED"};
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
    opacity: 0;

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
`
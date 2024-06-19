import styled from "styled-components";

export const TagContainer = styled.div`
    display: inline;
    padding: 0.2vw 0.9vw;
    border-radius: 1vw;
    background-color: ${props => props.$nightMode ? "#183340" : "#E1E3F0"};
    box-shadow: ${props => props.$nightMode ? "none" : "inset 0 0 2px 2px #A9BCCB"};
    color: ${props => props.$nightMode ? "#64FFDA" : "#242F4A"};
    font-size: 1vw;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1450px) {
        font-size: 14px;
        padding: 3px 10px;
        border-radius: 15px;
    }
`
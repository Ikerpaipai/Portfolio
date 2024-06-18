import styled from "styled-components";

export const Container = styled.div`
    opacity: 0;
    width: 40vw;
    max-width: 400px;
    height: 125px;
    border-radius: 20px;
    border: ${props => !props.$nightMode && "1px solid #CBCBCB"};
    background-color: ${props => props.$nightMode ? "#2E3649" : "#fff"};
    box-shadow: ${props => props.$nightMode ? "inset 0 0 4px #656565": "inset 0 0 4px #7C3AED"};
    transition: all 0.3s ease-in-out;
    z-index: 15;

    &.active{
        animation: scale 1s ease-in-out ${props => props.$delay} forwards;

        @keyframes scale {
            from{
                opacity: 0;
                transform: scale(0);
            }
            to{
                opacity: 1;
                transform: scale(1);
            }
        }
    }

    @media screen and (max-width: 850px) {
        width: 400px;
    }
`

export const Title = styled.div`
    width: 100%;
    height: 30%;
    border-bottom: 1px solid #BC9DF1;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.$nightMode ? "#D7E4F8" : ""};
    transition: all 0.3s ease-in-out;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: start;
    gap: 13px;
    padding: 10px;
    flex-wrap: wrap;
`
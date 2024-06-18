import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 30px;
`

export const Logo = styled.div`
    position: relative;
    width: 25px;
    height: auto;
    margin-top: ${props => props.$marginTop};
    cursor: pointer;

    svg{
        width: 100%;
        height: 100%;
    }
`

export const FlagsContainer = styled.div`
    position: absolute;
    top: 0%;
    left: 0;
    display: flex;
    justify-content: end;
    flex-direction: column;
    transition: top 0.3s ease-in-out;
    z-index: 15;

    &.active{
        top: 90%;
        @media screen and (max-width: 650px) {
            top: 120%;
        }
    }
`
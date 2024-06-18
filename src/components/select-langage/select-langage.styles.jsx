import styled from "styled-components";

export const Logo = styled.div`
    position: relative;
    width: auto;
    height: 17px;
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
        top: 100%;
    }
`
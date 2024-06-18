import styled from "styled-components";

export const SectionsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 20%;
    min-height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 15;
    transform: translateY(150%);
    transition: all 1.5s ease-in-out;

    &.active{
        transform: translateY(0);
    }

    @media screen and (max-width: 850px) {
        flex-direction: column;
        row-gap: 5px;
        width: auto;
    }
`
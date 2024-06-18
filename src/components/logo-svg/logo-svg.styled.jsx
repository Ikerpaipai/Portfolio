import styled from "styled-components";

export const LogoContainer = styled.div`
    width: auto;
    height: ${props => props.$height};
    cursor: ${props => props.$cursor && 'pointer'};
    filter: ${props => props.$active && "contrast(30%)"};
    opacity: ${props => props.$active && "0.5"};
    position: relative;

    svg{
        width: auto;
        height: 100%;
        fill: ${props => props.$fill};
        transition: all 0.3s ease-in-out;
        stroke: ${props => props.$stroke};
        stroke-width: ${props => props.$strokeWidth};
        &:hover{
            fill: ${props => props.$hoverFill}
        }
    }
`

export const TagContainer = styled.div`
    position: absolute;
    top: -30px;
    padding: 2px 5px;
    border-radius: 5px;
    background-color: black;
    color: #fff;
    white-space: nowrap;
`
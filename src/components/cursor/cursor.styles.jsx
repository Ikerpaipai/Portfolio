import styled from "styled-components";

export const Cursor = styled.div.attrs(props => ({
    style: {
      top: props.$top,
      left: props.$left,
    },
  }))`
    position: absolute;
    width: 60vw;
    height: 60vw;
    min-height: 800px;
    min-width: 800px;
    border-radius: 50%;
    background: radial-gradient(rgba(59,65,82, 0.7), #1D2337 60%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease-out;
    z-index: 10;

    @media screen and (max-width: 650px) {
      display: none;
    }
  `;
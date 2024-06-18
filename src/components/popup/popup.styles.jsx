import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.$nightMode ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)"};
  z-index: 999;
  transition: all 0.3s ease-in-out;
`;

export const PopupContainer = styled.div`
    max-height: calc(100vh - 130px);
    width: 70vw;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: ${props => props.$nightMode ? "#112240" : "#FFFFFF"};
    padding: 30px;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, -50%) scale(0);
    transform-origin: center;
    transition: all 0.3s ease-in-out;
    overflow-y: scroll;

    &.active{
        transform: translate(-50%, -50%) scale(1);
    }

     /* Stylisation de la barre de défilement pour les navigateurs WebKit */
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #7C3AED;
    }

    /* Stylisation de la barre de défilement pour les navigateurs Gecko (Firefox) */
    &::-moz-scrollbar {
        width: 10px;
    }

    &::-moz-scrollbar-thumb {
        background-color: #7C3AED;
    }

    @media screen and (max-width: 850px) {
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
      overflow-x: hidden;
      padding: 120px 30px 30px 30px;
    }
`

export const CrossContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  svg{
    fill: ${props => props.$nightMode ? "#64FFDA" : "black"};
  }

  @media screen and (max-width: 850px) {
    top: 70px;
  }
`
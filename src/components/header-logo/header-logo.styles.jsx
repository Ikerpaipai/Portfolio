import styled, { keyframes } from "styled-components";

// Définition des keyframes
const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const floating = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const floating2 = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const ImageLogo = styled.div`
    transform: scale(0);
    width: 3vw;
    height: auto;
    position: absolute;
    top: ${(props) => props.$top || "0"};
    left: ${(props) => props.$left || "0"};
    animation: ${scale} 1s ease-in-out ${(props) => props.$delay} forwards;

    &.floating {
        animation: ${(props) => (props.$keyframe === "floating2" ? floating2 : floating)} ${(props) => props.$duration || "6s"} ease-in-out infinite;
    }

    svg {
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 1450px){
      width: 50px;
    }
    @media screen and (max-width: 850px){
      display: none;
    }
`;

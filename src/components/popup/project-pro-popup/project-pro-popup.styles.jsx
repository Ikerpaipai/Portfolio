import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ImagePrincipale = styled.img`
  width: ${props => (props.$isZoomed ? "100%" : "450px")};
  height: auto;
  position: ${props => (props.$isZoomed && "relative")};
  z-index: ${props => (props.$isZoomed ? "1000" : "auto")};
  cursor: ${props => (props.$isZoomed ? "zoom-out" : "zoom-in")};
  transition: all 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out;

  @media screen and (max-width: 500px) {
    width: 350px;
    height: auto;
    cursor: auto;
  }
`;

export const ImageFlexContainer = styled.div`
    max-width: 50%;
    height: auto;
    display: flex;
    column-gap: 5px;
    margin-top: 5px;
    overflow-x: scroll;

    @media screen and (max-width: 750px) {
        max-width: 100%;
    }
`

export const ImageSelect = styled.div`
    position: relative;
    min-width: 110px;
    min-height: 50px;
    background-image: url(${props => props.$image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 999;
    }

    &:hover::after {
        opacity: 0.5;
    }    
`

export const InfoContainer = styled.div`
    width: 100%;
    margin-top: 15px;
`

export const Title = styled.h3`
    color: ${props => props.$nightMode ? "#CCD6F6" : "black"};
    transition: all 0.3s ease-in-out;
`
export const Paragraphe = styled.p`
    color: ${props => props.$nightMode ? "#929CBC" : "black"};
    transition: all 0.3s ease-in-out;
    height: 70px;

    @media screen and (max-width: 1560px) {
        height: 90px;
    }
    @media screen and (max-width: 1110px) {
        height: 125px;
    }
    @media screen and (max-width: 850px) {
        height: 110px;
    }
    @media screen and (max-width: 680px) {
        height: 125px;
    }
    @media screen and (max-width: 580px) {
        height: 150px;
    }
    @media screen and (max-width: 530px) {
        height: 180px;
    }
    @media screen and (max-width: 470px) {
        height: 200px;
    }
    @media screen and (max-width: 420px) {
        height: 240px;
    }
    @media screen and (max-width: 350px) {
        height: 260px;
    }
    @media screen and (max-width: 330px) {
        height: 290px;
    }
`

export const StepContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

export const Step = styled.span`
    color: ${props => props.$nightMode ? "#CCD6F6" : "black"};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        text-decoration: underline;
    }
`

export const LibrairieSection = styled.div`
    width: 100%;
`
export const TitleLibrairie = styled.h4`
    color: ${props => props.$nightMode ? "#CCD6F6" : "black"};
    margin-top: 10px;
    transition: all 0.3s ease-in-out;
`
export const LibrairieContainer = styled.div`
    display: flex;
    column-gap: 5px;
    row-gap: 5px;
    margin-top: 5px;
    flex-wrap: wrap;
`
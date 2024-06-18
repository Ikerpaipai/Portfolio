import styled from "styled-components";

export const Container = styled.div`
    display: none;
    position: absolute;
    right: ${(props)=>props.$right ? "-10px" : "none"};
    bottom: ${(props)=>props.$bottom ? "-10px" : "none"};
    left: ${(props)=>props.$left ? "-10px" : "none"};
    width: 20px;
    height: 20px;

    &.active{
        display: block;
    }
    
    &:before {
        content: '';
        position: relative;
        display: block;
        width: 200%;
        height: 200%;
        box-sizing: border-box;
        margin-left: -50%;
        margin-top: -50%;
        border-radius: 45px;
        background-color: #01a4e9;
        animation: pulse-ring 1s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }
    
    &:after {
        content: '';
        position: absolute;
        left: 0; 
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 0 8px rgba(0,0,0,.3);
        animation: pulse-dot 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite;
    }

    @keyframes pulse-ring {
    0% {
        transform: scale(.33);
    }
    80%, 100% {
        opacity: 0;
    }
    }

    @keyframes pulse-dot {
    0% {
        transform: scale(.8);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(.8);
    }
    }
`
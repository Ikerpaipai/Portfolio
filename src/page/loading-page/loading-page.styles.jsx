import styled from "styled-components";

export const Body = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: ${props => props.$nightMode && "#1D2337"};
    border-bottom: 1px solid #D7CAEF;


    @media screen and (min-width: 850px) {
        &::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(#fff 30%, #F2EFFF);
            z-index: -1;
            border-bottom: 1px solid #D7CAEF;
            animation: LoadingBodyUp 1s ease-in-out 2.5s forwards;
        }

        @keyframes LoadingBodyUp {
            form{
                height: 100vh;
            }
            to{
                height: 82vh;
            }
        }
    }
`

export const Container = styled.div`
    width: 500px;
    height: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    animation: LogoDisparait 1s ease-in-out 2.7s forwards;

    @keyframes LogoDisparait {
        form{
            opacity: 1;
        }
        to{
            opacity: 0;
        }
    }
`

export const TopSection = styled.div`
    height: 50%;
    display: flex;
    align-items: end;
    justify-content: end;
`
export const BottomSection = styled.div`
    height: 50%;
    display: flex;
    align-items: start;
    justify-content: start;
`

export const Title = styled.span`
    font-size: 60px;
    font-family: "Kaushan Script", cursive;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#334155"};
`

export const AnimationTopDiv = styled.div`
    width: 290px;
    display: flex;
    align-items: center;
    justify-content: start;
    column-gap: 30px;
    animation: start 2s ease-in-out 0.5s forwards;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 250px;
        height: 100%;
        background: ${props => props.$nightMode ? "#1D2337" : "linear-gradient(#fff, #FCFCFF)"};
        clip-path: polygon(13% 0%, 100% 0, 100% 100%, 0% 100%);
    }

    @media screen and (max-width: 500px) {
        animation: startResponsive 2s ease-in-out 0.5s forwards;
    }

    @keyframes start {
        from{
            width: 290px;
        }
        to{
            width: 450px;
        }
    }

    @keyframes startResponsive {
        from{
            width: 290px;
        }
        to{
            width: 425px;
        }
    }
`
export const AnimationBottomDiv = styled.div`
    width: 290px;
    display: flex;
    align-items: center;
    justify-content: end;
    column-gap: 40px;
    animation: start 2s ease-in-out 0.5s forwards;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 250px;
        height: 100%;
        background: ${props => props.$nightMode ? "#1D2337" : "linear-gradient(#FCFCFF, #F7F5FF)"};
        clip-path: polygon(0 0, 100% 0, 87% 100%, 0% 100%);
    }

    @media screen and (max-width: 500px) {
        animation: startResponsive 2s ease-in-out 0.5s forwards;
    }
`

export const SlashContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 9999;
`

export const WelcomeText = styled.span`
    font-size: 60px;
    font-weight: bold;
    opacity: 0;
    color: ${props => props.$nightMode ? "#D7E4F8" : "#334155"};
    animation: text 1s ease-in-out 1.5s forwards;
    display: flex;
    align-items: center;
    column-gap: 20px;

    img{
        width: 50px;
    }

    @keyframes text {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`
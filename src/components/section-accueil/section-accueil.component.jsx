import { useContext } from "react"
import { CircleLogo, Container, HeadContainer, Info, TitleContainer } from "./section-accueil.styles"
import { ModeContext } from "../../contexts/toggle-mode.context"

const SectionAccueil = ({title, info, circleColor, LogoComponent, active, containerColor}) => {
    const {isOn} = useContext(ModeContext)
    return(
        <Container $nightMode={isOn} $active={active}>
            <HeadContainer>
                <CircleLogo $circleColor={circleColor} $nightMode={isOn}>
                    <LogoComponent />
                </CircleLogo>
                <TitleContainer $containerColor={containerColor} $nightMode={isOn}>
                    {title}
                </TitleContainer>
            </HeadContainer>
            <Info $nightMode={isOn}>{info}</Info>
        </Container>
    )
}

export default SectionAccueil
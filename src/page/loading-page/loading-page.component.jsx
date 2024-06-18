import { Body, TopSection, Container, Title, AnimationTopDiv, AnimationBottomDiv, BottomSection, SlashContainer, WelcomeText } from "./loading-page.styles"
import LogoSVG from "../../components/logo-svg/logo-svg.component"
import {ModeContext} from "../../contexts/toggle-mode.context"

import BaliseGauche from "../../assets/logo-web/balise_gauche.svg?react"
import BaliseDroite from "../../assets/logo-web/balise_droite.svg?react"
import BaliseSlash from "../../assets/logo-web/balise_slash.svg?react"
import { useContext } from "react"

const LoadingPage = () => {
    const {isOn} = useContext(ModeContext)

    return(
        <Body $nightMode={isOn}>
            <Container>
                <TopSection>
                    <AnimationTopDiv $nightMode={isOn}>
                        <LogoSVG LogoComponent={BaliseGauche} height="60px" stroke={isOn ? "#64FFDA" : "#7C3AED"} strokeWidth="4" />
                        <Title $nightMode={isOn}>Iker</Title>
                    </AnimationTopDiv>
                </TopSection>
                <SlashContainer>
                    <LogoSVG LogoComponent={BaliseSlash} height="200px" stroke={isOn ? "#64FFDA" : "#7C3AED"} strokeWidth="2" />
                </SlashContainer>
                <BottomSection>
                    <AnimationBottomDiv $nightMode={isOn}>
                        <Title $nightMode={isOn}>Dev</Title>
                        <LogoSVG LogoComponent={BaliseDroite} height="60px" stroke={isOn ? "#64FFDA" : "#7C3AED"} strokeWidth="4" />
                    </AnimationBottomDiv>
                </BottomSection>
            </Container>
        </Body>
    )
}

export default LoadingPage
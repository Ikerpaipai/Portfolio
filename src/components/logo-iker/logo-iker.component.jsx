import { useContext } from "react"
import {ModeContext} from "../../contexts/toggle-mode.context"

import { FlexContainer, LeftSide, RightSide, Title } from "./logo-iker.styles"

import LogoSVG from "../logo-svg/logo-svg.component"

import BaliseGauche from "../../assets/logo-web/balise_gauche.svg?react"
import BaliseDroite from "../../assets/logo-web/balise_droite.svg?react"
import BaliseSlash from "../../assets/logo-web/balise_slash.svg?react"

const LogoIker = () => {
    const {isOn} = useContext(ModeContext)
    return(
        <FlexContainer to="/">
            <LeftSide>
                <LogoSVG LogoComponent={BaliseGauche} height="1.6vw" minHeight="17px" stroke={isOn ? "#64FFDA" : "#7C3AED"} strokeWidth="3"/>
                <Title $nightMode={isOn}>Iker Dev</Title>
            </LeftSide>
            <RightSide>
                <LogoSVG LogoComponent={BaliseSlash} height="2.4vw" minHeight="27px" stroke={isOn ? "#64FFDA" : "#7C3AED"} strokeWidth="3"/>
                <LogoSVG LogoComponent={BaliseDroite} height="1.6vw" minHeight="17px" stroke={isOn ? "#64FFDA" : "#7C3AED"} strokeWidth="3"/>
            </RightSide>
        </FlexContainer>
    )
}

export default LogoIker
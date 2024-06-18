import { useContext } from "react"
import ChooseSection from "../../components/choose-section-accueil/choose-section-accueil.component"
import HeaderAccueil from "../../components/header-accueil/header-accueil.component"
import ProjetProSection from "../../components/projet-pro-section/projet-pro-section.component"
import ServicesSection from "../../components/services-section-accueil/services-section-accueil.component"

import {ModeContext} from "../../contexts/toggle-mode.context"

import { Body, BodyFirstPart, BodySecondPart, Header } from "./accueil.styles"
import LuminousCursor from "../../components/cursor/cursor.composant"
import ProjetPersoSection from "../../components/projet-perso-section/projet-perso-section.component"

const Accueil = () => {
    const {isOn} = useContext(ModeContext)
    return(
        <Body>
            {isOn && <LuminousCursor />}
            <Header $nightMode={isOn}>
                <HeaderAccueil />
                <ChooseSection active="services" />
            </Header>
            <ServicesSection />
            <BodyFirstPart $nightMode={isOn}>
                <ChooseSection active="projet-pro" />
                <ProjetProSection />
            </BodyFirstPart>
            <BodySecondPart $nightMode={isOn}>
                <ChooseSection active="projet-perso" />
                <ProjetPersoSection />
            </BodySecondPart>
        </Body>
    )
}

export default Accueil
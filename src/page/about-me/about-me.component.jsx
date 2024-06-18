import { useContext } from "react"
import {ModeContext} from "../../contexts/toggle-mode.context"
import Competences from "../../components/competences/competences.component"
import HeaderAbout from "../../components/header-about/header-about.component"
import SkillsSection from "../../components/skills-section/skills-section.component"
import { Body, Header } from "./about-me.styles"
import LuminousCursor from "../../components/cursor/cursor.composant"

const AboutMe = () => {
    const {isOn} = useContext(ModeContext)

    return(
        <div style={{position: "relative",overflow: "hidden"}}>
            {isOn && <LuminousCursor />}
            <Header $nightMode={isOn}>
                <HeaderAbout />
            </Header>
            <Body $nightMode={isOn}>
                <Competences />
                <SkillsSection />
            </Body>
        </div>
    )
}

export default AboutMe
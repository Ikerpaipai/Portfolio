import { useContext } from "react"
import { Link } from "react-router-dom"
import {ModeContext} from "../../contexts/toggle-mode.context"
import LogoSVG from "../logo-svg/logo-svg.component"
import { Barre, FlexContainer, ImageContainer, Info, KeyWord, LeftSection, LogoContainer, Paragraphe, RightSection, Title } from "./header-about.styles"

import ImageProfil from "../../assets/photo-profil/photo profil portfolio.png"
import GithubLogo from "../../assets/logo-dev/github.svg?react"
import LinkedinLogo from "../../assets/logo-dev/linkedin.svg?react"
import { useTranslation } from "react-i18next"

const HeaderAbout = () => {
    const [t] = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    return(
        <FlexContainer>
            <LeftSection>
                <Barre $nightMode={isOn}/>
                <Title $nightMode={isOn}>
                    {t("about.header.title1")}<br />
                    {t("about.header.title2")}
                </Title>
                <Paragraphe $nightMode={isOn}><KeyWord $nightMode={isOn}>{t("about.header.paragrapheSpan1")}</KeyWord>{t("about.header.paragraphe1")}<KeyWord $nightMode={isOn}>{t("about.header.paragrapheSpan2")}</KeyWord>.</Paragraphe>
                <Paragraphe $nightMode={isOn}>{t("about.header.paragraphe2")}<KeyWord $nightMode={isOn}>{t("about.header.paragrapheSpan3")}</KeyWord>{t("about.header.paragraphe3")}<KeyWord $nightMode={isOn}>{t("about.header.paragrapheSpan4")}</KeyWord>{t("about.header.paragraphe4")}<KeyWord $nightMode={isOn}>{t("about.header.paragrapheSpan5")}</KeyWord>.</Paragraphe>
                <Paragraphe $nightMode={isOn}>{t("about.header.paragraphe5")}<KeyWord $nightMode={isOn}>{t("about.header.paragrapheSpan6")}</KeyWord>{t("about.header.paragraphe6")}<KeyWord $nightMode={isOn}>{t("about.header.paragrapheSpan7")}</KeyWord>{t("about.header.paragraphe7")}<KeyWord $nightMode={isOn}>{t("about.header.paragrapheSpan8")}</KeyWord>{t("about.header.paragraphe8")}</Paragraphe>
                <Paragraphe $nightMode={isOn}>{t("about.header.paragraphe9")}<KeyWord $nightMode={isOn}>{t("about.header.paragrapheSpan9")}</KeyWord>{t("about.header.paragraphe10")}<KeyWord $nightMode={isOn}>{t("about.header.paragrapheSpan10")}</KeyWord>{t("about.header.paragraphe11")}<KeyWord $nightMode={isOn}>{t("about.header.paragrapheSpan11")}</KeyWord>.</Paragraphe>
            </LeftSection>
            <RightSection>
                <ImageContainer $image={`url(${ImageProfil})`} $nightMode={isOn}/>
                <Info $nightMode={isOn}>{t("about.header.discover-me")}</Info>
                <LogoContainer>
                    <Link to="https://github.com/Ikerpaipai" target="_blank">
                        <LogoSVG LogoComponent={GithubLogo} fill="#334155" minHeight="25px" height="1.8vw" hoverFill={isOn && "#64FFDA"} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/iker-paillet-dev-fullstack" target="_blank">
                        <LogoSVG LogoComponent={LinkedinLogo} fill="#334155" minHeight="25px" height="1.8vw" hoverFill={isOn && "#64FFDA"} />
                    </Link>
                </LogoContainer>
            </RightSection>
        </FlexContainer>
    )
}

export default HeaderAbout
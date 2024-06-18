import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";
import { useTranslation } from "react-i18next";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import HeaderLogo from "../header-logo/header-logo.component";

import { AnimationButton, ColorText, HeaderContainer, SubTitle, Title, TitleContainer } from "./header-accueil.styles"
import HTMLLogoSVG from "../../assets/logo-dev/html_logo.svg?react"
import ReactQuerySVG from "../../assets/logo-dev/react-query_logo.svg?react"
import JestSVG from "../../assets/logo-dev/jest_logo.svg?react"
import TypescriptSVG from "../../assets/logo-dev/typescript_logo.svg?react"
import JsSVG from "../../assets/logo-dev/js_logo.svg?react"
import ReactSVG from "../../assets/logo-dev/react_logo.svg?react"
import NodeSVG from "../../assets/logo-dev/nodejs_logo.svg?react"
import VitestSVG from "../../assets/logo-dev/vitest_logo.svg?react"
import PostgresSVG from "../../assets/logo-dev/postgresql_logo.svg?react"
import CssSVG from "../../assets/logo-dev/css_logo.svg?react"
import FigmaSVG from "../../assets/logo-dev/figma_logo.svg?react"
import { ModeContext } from "../../contexts/toggle-mode.context";

const TEXTS = ["Front-End", "Back-End", "UI-UX"]

const HeaderAccueil = () => {
    const [t] = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()
    
    useEffect(()=>{
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            4000,
          );
          return () => clearTimeout(intervalId);
    },[])

    const handleContactRedirection = () => {
        navigate("/contact")
    }

    return(
        <HeaderContainer>
            <TitleContainer>
                <Title $colorText={isOn}>
                    {t("accueil.header.title1")}<br />
                    {t("accueil.header.title2")}<br />
                    {t("accueil.header.title3")} <TextTransition springConfig={presets.gentle} inline><ColorText>{TEXTS[index % TEXTS.length]}</ColorText></TextTransition>
                </Title>
                <SubTitle $colorText={isOn}>&quot;{t("accueil.header.info")}&quot;</SubTitle>
                <AnimationButton>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.base}
                        $nightMode={isOn}
                        onClick={handleContactRedirection}
                    >
                        {t("accueil.header.button")}
                    </Button>
                </AnimationButton>
            </TitleContainer>
            <HeaderLogo top="20vh" left="6vw" LogoComponent={HTMLLogoSVG} duration="6s" keyframe="floating" delay="0.8s"/>
            <HeaderLogo top="46vh" left="10vw" LogoComponent={ReactQuerySVG} duration="8s" keyframe="floating2" delay="0.5s"/>
            <HeaderLogo top="12vh" left="40vw" LogoComponent={JestSVG} duration="7s" keyframe="floating2" delay="1s"/>
            <HeaderLogo top="65vh" left="33vw" LogoComponent={TypescriptSVG} duration="6s" keyframe="floating" delay="1.5s"/>
            <HeaderLogo top="17vh" left="55vw" LogoComponent={JsSVG} duration="5s" keyframe="floating" delay="0.5s"/>
            <HeaderLogo top="55vh" left="52vw" LogoComponent={ReactSVG} duration="7s" keyframe="floating2" delay="1s"/>
            <HeaderLogo top="15vh" left="77vw" LogoComponent={NodeSVG} duration="6s" keyframe="floating2" delay="0.7s"/>
            <HeaderLogo top="37vh" left="70vw" LogoComponent={VitestSVG} duration="8s" keyframe="floating" delay="1.2s"/>
            <HeaderLogo top="55vh" left="85vw" LogoComponent={PostgresSVG} duration="7s" keyframe="floating2" delay="0.4s"/>
            <HeaderLogo top="60vh" left="70vw" LogoComponent={CssSVG} duration="6s" keyframe="floating2" delay="1.7s"/>
            <HeaderLogo top="27vh" left="90vw" LogoComponent={FigmaSVG} duration="9s" keyframe="floating" delay="1.3s"/>
        </HeaderContainer>
    )
}

export default HeaderAccueil
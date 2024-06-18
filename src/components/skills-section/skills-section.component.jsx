import {useState, useEffect, useRef} from "react"
import Skill from "./skill/skill.component"
import { SkillsContainer, Title } from "./skills-section.styles"

import HtmlLogo from "../../assets/logo-dev/html_logo.svg?react"
import CssLogo from "../../assets/logo-dev/css_logo.svg?react"
import ReactLogo from "../../assets/logo-dev/react_logo.svg?react"
import Tanstack from "../../assets/logo-dev/react-query_logo.svg?react"
import StyledComponentsLogo from "../../assets/logo-dev/styled-components.svg?react"
import VitestLogo from "../../assets/logo-dev/vitest_logo.svg?react"
import JestLogo from "../../assets/logo-dev/jest_logo.svg?react"
import AngularLogo from "../../assets/logo-dev/angular.svg?react"
import VueLogo from "../../assets/logo-dev/vue.svg?react"
import TailwindLogo from "../../assets/logo-dev/tailwind.svg?react"
import ApolloLogo from "../../assets/logo-dev/apollo.svg?react"
import Redux from "../../assets/logo-dev/redux.svg?react"

import NodeJs from "../../assets/logo-dev/nodejs_logo.svg?react"
import Express from "../../assets/logo-dev/express.svg?react"
import Postgresql from "../../assets/logo-dev/postgresql_logo.svg?react"
import Firebase from "../../assets/logo-dev/firebase.svg?react"
import Prisma from "../../assets/logo-dev/prisma.svg?react"
import MongoDB from "../../assets/logo-dev/mongo-db.svg?react"
import NextJs from "../../assets/logo-dev/nextjs.svg?react"
import Django from "../../assets/logo-dev/django.svg?react"

import Js from "../../assets/logo-dev/js_logo.svg?react"
import Ts from "../../assets/logo-dev/typescript_logo.svg?react"
import Python from "../../assets/logo-dev/python.svg?react"
import Goland from "../../assets/logo-dev/goland.svg?react"

import Git from "../../assets/logo-dev/git.svg?react"
import Jira from "../../assets/logo-dev/jira.svg?react"
import AWS from "../../assets/logo-dev/aws.svg?react"
import Docker from "../../assets/logo-dev/docker.svg?react"
import Kubernetes from "../../assets/logo-dev/kubernetes.svg?react"
import { useContext } from "react"
import { ModeContext } from "../../contexts/toggle-mode.context"
import { useTranslation } from "react-i18next"

const frontEnd = [
    {name: HtmlLogo, opacity: false, alt: "Html"},
    {name: CssLogo, opacity: false, alt: "Css"},
    {name: ReactLogo, opacity: false, alt: "React"},
    {name: Tanstack, opacity: false, alt: "Tanstack"},
    {name: Redux, opacity: false, alt: "Redux"},
    {name: StyledComponentsLogo, opacity: false, alt: "Styled-Components"},
    {name: VitestLogo, opacity: false, alt: "Vitest"},
    {name: JestLogo, opacity: false, alt: "Jest"},
    {name: AngularLogo, opacity: true, alt: "Angular"},
    {name: VueLogo, opacity: true, alt: "Vue"},
    {name: ApolloLogo, opacity: true, alt: "Apollo"},
    {name: TailwindLogo, opacity: true, alt: "Tailwind"},
]

const backEnd = [
    {name: NodeJs, opacity: false, alt: "NodeJs"},
    {name: Express, opacity: false, alt: "Express"},
    {name: Postgresql, opacity: false, alt: "PostgreSQL"},
    {name: Firebase, opacity: false, alt: "Firebase"},
    {name: Prisma, opacity: false, alt: "Prisma"},
    {name: MongoDB, opacity: true, alt: "MongoDB"},
    {name: NextJs, opacity: true, alt: "NextJs"},
    {name: Django, opacity: true, alt: "Django"},
]

const progamming = [
    {name: Js, opacity: false, alt: "Javascript"},
    {name: Ts, opacity: false, alt: "Typescript"},
    {name: Python, opacity: true, alt: "Python"},
    {name: Goland, opacity: true, alt: "Goland"},
]

const devOps = [
    {name: Git, opacity: false, alt: "Git"},
    {name: Jira, opacity: true, alt: "Jira"},
    {name: Docker, opacity: true, alt: "Docker"},
    {name: AWS, opacity: true, alt: "AWS"},
    {name: Kubernetes, opacity: true, alt: "Kubernetes"},
]

const SkillsSection = () => {
    const {t} = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    const containerRef = useRef(null)
    const [competencesEffect, setCompetencesEffect] = useState(false)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCompetencesEffect(true);
                }
            });
        }, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
    }, []);

    return(
        <div ref={containerRef}>
            <Title $nightMode={isOn}>{t("about.skill.title")}</Title>
            <SkillsContainer>
                <Skill title="Front-end" logo={frontEnd} delay="0s" active={competencesEffect}/>
                <Skill title="Back-end" logo={backEnd} delay="0.4s" active={competencesEffect}/>
                <Skill title="Programming Languages" logo={progamming} delay="0.6s" active={competencesEffect}/>
                <Skill title="DevOps" logo={devOps} delay="0.2s" active={competencesEffect}/>
            </SkillsContainer>
        </div>
    )
}

export default SkillsSection
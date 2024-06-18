import { FlexContainer, LeftSection, RightSection, Title } from "./competences.styles"
import Competence from "./competence/competence.component"
import { useContext, useEffect, useRef, useState } from "react"
import { ModeContext } from "../../contexts/toggle-mode.context"
import { useTranslation } from "react-i18next"

const Competences = () => {
    const [t] = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    const bodyContainerRef = useRef(null)
    const [competencesEffect, setCompetencesEffect] = useState(false)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.8,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCompetencesEffect(true);
                }
            });
        }, options);

        if (bodyContainerRef.current) {
            observer.observe(bodyContainerRef.current);
        }
    }, []);

    return(
        <div  ref={bodyContainerRef}>
            <Title $nightMode={isOn}>{t("about.competences.title")}</Title>
            <FlexContainer>
                <LeftSection>
                    <div>
                        <Competence info={t("about.competences.title1")} delay="0s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title2")} delay="0.1s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title3")} delay="0.2s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title4")} delay="0.3s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title5")} delay="0.4s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title6")} delay="0.5s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title7")} delay="0.6s" active={competencesEffect}/>
                    </div>
                </LeftSection>
                <RightSection>
                    <div>
                        <Competence info={t("about.competences.title8")} delay="0.7s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title9")} delay="0.8s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title10")} delay="0.9s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title11")} delay="1s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title12")} delay="1.1s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title13")} delay="1.2s" active={competencesEffect}/>
                        <Competence info={t("about.competences.title14")} delay="1.3s" active={competencesEffect}/>
                    </div>
                </RightSection>
            </FlexContainer>
        </div>
    )
}

export default Competences
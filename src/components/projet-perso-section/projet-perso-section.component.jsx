import { useContext, useEffect, useRef, useState } from "react"
import ProjetPerso from "../projet-perso/projet-perso.component"
import { Container, Line, ProjectContainer, SubTitle, Title, TitleContainer, TitleSpan } from "./projet-perso-section.styles"
import { ModeContext } from "../../contexts/toggle-mode.context"
import PulseCircle from "../pulse-circle/pulse-circle.component"
import { useTranslation } from "react-i18next"

import BlogImage from "../../assets/projet-perso/projet-blog.png"
import CrownImage from "../../assets/projet-perso/projet-crown-clothes.png"
import DetectImage from "../../assets/projet-perso/projet-detect-face.png"
import AuthImage from "../../assets/projet-perso/projet-authentification.png"
import KyotoImage from "../../assets/projet-perso/projet-voyage.png"

const ProjetPersoSection = () => {
    const [t] = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    const containerRef = useRef(null);
    const lineRef = useRef(null)

    const [activeIndex, setActiveIndex] = useState(1);
    const [activeClass, setActiveClass] = useState(false);
    const [pulseActive, setPulseActive] = useState(false);

    const [maxScrolled, setMaxScrolled] = useState(0);
    const [maxHeights, setMaxHeights] = useState(0);

    const handleShow = (index) => {
        setActiveIndex(index);
    };


    const speedFactor = 2;
    const lineHeight = 35
    const lineWidth = 55

    useEffect(()=>{
        const handleScroll = () => {
            if (containerRef.current && lineRef.current){
                const containerTop = containerRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                const startScroll = windowHeight / 1.3;
                if (containerTop <= startScroll) {
                    const distanceScrolled = startScroll - containerTop;
                    const maxDistance = containerRef.current.offsetHeight;
                    const scrolled = (distanceScrolled / maxDistance) * 100;

                    // Update maxScrolled if the current scrolled is greater
                    setMaxScrolled((prev) => {
                        const newMaxScrolled = Math.max(prev, scrolled);

                        // Calculate new heights based on the maxScrolled value
                        const effectiveScrolled = newMaxScrolled;
                        if (effectiveScrolled <= lineHeight) {
                            lineRef.current.style.height = `${effectiveScrolled}%`;
                            lineRef.current.style.width = `0%`; // Width remains 0 while height is increasing
                            setMaxHeights(Math.max(prev.head, effectiveScrolled));
                            setPulseActive(true)
                        } else {
                            lineRef.current.style.height = `${lineHeight}%`;
                            const scrolledWidth = (effectiveScrolled - lineHeight) * speedFactor;
                            const newWidth = Math.min(scrolledWidth, lineWidth);
                            lineRef.current.style.width = `${newWidth}%`;

                            if(newWidth === lineWidth){
                                setActiveClass(true)
                                setPulseActive(false)
                            }
                        }

                        return newMaxScrolled;
                    })
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[maxScrolled, maxHeights])

    const projetPerso = [
        {
            index: 1,
            title: t("projetPerso.card.title1"),
            smallInfo: t("projetPerso.card.smallInfo1"),
            info: t("projetPerso.card.info1"),
            stack:["React", "Typescript", "Redux", "Firebase", "Styled-Components", "Jest"],
            image: CrownImage,
            link: "https://665f6c9db58c8f3f19bc9007--crown-clothes-training.netlify.app/"
        },
        {
            index: 2,
            title: t("projetPerso.card.title2"),
            smallInfo: t("projetPerso.card.smallInfo2"),
            info: t("projetPerso.card.info2"),
            stack:["Html", "Css", "Javascript", "EJS", "NodeJs", "Express", "Axios"],
            image: BlogImage,
            link: "https://github.com/Ikerpaipai/Blog"
        },
        {
            index: 3,
            title: t("projetPerso.card.title3"),
            smallInfo: t("projetPerso.card.smallInfo3"),
            info: t("projetPerso.card.info3"),
            stack:["React", "Css", "NodeJs", "Express", "PostgreSQL", "Knex", "Render"],
            image: DetectImage,
            link: "https://face-detect-exercise.netlify.app/"
        },
        {
            index: 4,
            title: t("projetPerso.card.title4"),
            smallInfo: t("projetPerso.card.smallInfo4"),
            info: t("projetPerso.card.info4"),
            stack:["Html", "Css", "EJS", "bcryptjs", "JWT", "NodeJs", "Express", "Render"],
            image: AuthImage,
            link: "https://training-authentification.onrender.com"
        },
        {
            index: 5,
            title: t("projetPerso.card.title5"),
            smallInfo: t("projetPerso.card.smallInfo5"),
            info: t("projetPerso.card.info5"),
            stack:["Html", "Css", "Javascript"],
            image: KyotoImage,
            link: "https://voyage-kyoto.netlify.app/"
        },
    ]

    return (
    <Container ref={containerRef}>
            <TitleContainer className={activeClass && "active"}>
                <Title $nightMode={isOn}>{t("projetPerso.title")}<TitleSpan>{t("projetPerso.titleSpan")}</TitleSpan></Title>
                <SubTitle $nightMode={isOn}>&quot;{t("projetPerso.subTitle")}&quot;</SubTitle>
            </TitleContainer>
            <Line ref={lineRef} $nightMode={isOn}><PulseCircle active={pulseActive} bottom left /></Line>
            <ProjectContainer className={activeClass && "active"}>
                {projetPerso.map(item => (
                    <div key={item.index} onClick={() => handleShow(item.index)}>
                        <ProjetPerso
                            show={activeIndex === item.index}
                            number={item.index}
                            title={item.title}
                            smallInfo={item.smallInfo}
                            info={item.info}
                            stack={item.stack}
                            image={item.image}
                            link={item.link}
                        />
                    </div>
                ))}
            </ProjectContainer>
        </Container>
    );
}

export default ProjetPersoSection
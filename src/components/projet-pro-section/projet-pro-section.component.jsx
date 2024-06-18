import { useContext, useEffect, useRef, useState } from "react";
import { BodyLineSection, HeadBlocLine, LeftLine, LeftLineContainer, LigneVerticale, ProjetContainer, RightLine, RightLineContainer, SectionContainer } from "./projet-pro-section.styles"
import ProjetPro from "../projet-pro/projet-pro.component";
import PulseCircle from "../pulse-circle/pulse-circle.component";
import { ModeContext } from "../../contexts/toggle-mode.context";
import { useTranslation } from "react-i18next";

import ClicmusicImage from "../../assets/projet-pro/clicmusic.png"
import PiginiArticle from "../../assets/projet-pro/pigini-principale.png"
import PiginiPanier from "../../assets/projet-pro/pigini-panier.png"
import PiginiFavory from "../../assets/projet-pro/pigini-favory.png"
import PiginiActuality from "../../assets/projet-pro/pigini-admin.png"
import PiginiAnalyse from "../../assets/projet-pro/pigini-analyse-compta.png"

const ProjetProSection = () => {
    const [t] = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    const containerRef = useRef(null);
    const headLinesRef = useRef(null);
    const leftLineRef = useRef(null);
    const rightLineRef = useRef(null);

    const lineEspace = 80
    const headLineHeight = 7
    const leftLineHeight = 15
    const rightLineHeight = 60
    const speedFactor = 5.5;

    const [maxScrolled, setMaxScrolled] = useState(0);
    const [maxHeights, setMaxHeights] = useState({
        head: 0,
        left: 0,
        right: 0,
    });
    const [classActive, setClassActive] = useState({
        project1: false,
        project2: false,
    })
    const [pulseActive, setPulseActive] = useState({
        head: false,
        left: false,
        right: false,
    })

    const [showProjectContainer, setShowProjectContainer] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current && headLinesRef.current && leftLineRef.current) {
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
                        if (effectiveScrolled <= headLineHeight) {
                            headLinesRef.current.style.height = `${effectiveScrolled}%`;
                            headLinesRef.current.style.width = `0%`; // Width remains 0 while height is increasing
                            setMaxHeights((prev) => ({
                                ...prev,
                                head: Math.max(prev.head, effectiveScrolled),
                            }));
                            setPulseActive((prev)=>({...prev, head: true}))
                        } else {
                            headLinesRef.current.style.height = `${headLineHeight}%`;
                            const scrolledWidth = (effectiveScrolled - headLineHeight) * speedFactor;
                            const newWidth = Math.min(scrolledWidth, lineEspace);
                            headLinesRef.current.style.width = `${newWidth}%`;

                            if(newWidth >= lineEspace ){
                                setPulseActive((prev)=>({...prev, head: false}))
                            }

                            if (newWidth === lineEspace) {
                                const adjustedScroll = effectiveScrolled - headLineHeight - (lineEspace / speedFactor);
                                const newLeftHeight = Math.min(adjustedScroll, leftLineHeight);
                                if (newLeftHeight > maxHeights.left) {
                                    leftLineRef.current.style.height = `${newLeftHeight}%`;
                                    setMaxHeights((prev) => ({
                                        ...prev,
                                        left: newLeftHeight,
                                    }));
                                    setPulseActive((prev)=>({...prev, left: true}))
                                    if(newLeftHeight === leftLineHeight){
                                        setPulseActive((prev)=>({...prev, left: false}))
                                    }
                                }

                                const newRightHeight = Math.min(adjustedScroll, rightLineHeight);
                                if (newRightHeight > maxHeights.right) {
                                    rightLineRef.current.style.height = `${newRightHeight}%`;
                                    setMaxHeights((prev) => ({
                                        ...prev,
                                        right: newRightHeight,
                                    }));
                                    setPulseActive((prev)=>({...prev, right: true}))
                                    if(newRightHeight === rightLineHeight){
                                        setPulseActive((prev)=>({...prev, right: false}))
                                    }
                                }
                                if(newLeftHeight === leftLineHeight){
                                    setClassActive((prev)=>({...prev, project1: true}))
                                }
                                if(newRightHeight > 55){
                                    setShowProjectContainer(true)
                                }
                                if(newRightHeight === rightLineHeight){
                                    setClassActive((prev)=>({...prev, project2: true}))
                                }
                            }
                        }

                        return newMaxScrolled;
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [maxScrolled, maxHeights]);

    return(
        <SectionContainer ref={containerRef}>
            <HeadBlocLine ref={headLinesRef} $nightMode={isOn}>
                <LigneVerticale $nightMode={isOn}>
                    <PulseCircle active={pulseActive.head} bottom right/>
                    <PulseCircle active={pulseActive.head} bottom left/>
                </LigneVerticale>
            </HeadBlocLine>
            <BodyLineSection $width={lineEspace + "%"}>
                <LeftLineContainer>
                    <LeftLine ref={leftLineRef} $nightMode={isOn}>
                        <PulseCircle active={pulseActive.left} bottom left />
                    </LeftLine>
                    <ProjetContainer className={classActive.project1 ? "active" : ""}>
                        <ProjetPro
                            title={t("projetPro.title1")}
                            info={t('projetPro.info1', { returnObjects: true })}
                            tag={["Typescript", "React", "PostgreSQL", "Firebase"]}
                            image={[PiginiArticle, PiginiPanier, PiginiFavory, PiginiActuality, PiginiAnalyse]}
                            infoDetails={t('projetPro.infoDetails1', { returnObjects: true })}
                            tagFirst={["Typescript", "React", "PostgreSQL", "Firebase", "Express", "Styled-components", "Vitest", "Figma"]}
                            tagSecond={["React-router", "React-hook-form", "Yup", "React-email", "Resend", "Tanstack Query", "Prisma", "Chart.js", "Sonner","Big-calendar", "Leaflet"]}
                        />
                    </ProjetContainer>
                </LeftLineContainer>
                <RightLineContainer>
                    <RightLine ref={rightLineRef} $nightMode={isOn}>
                        <PulseCircle active={pulseActive.right} bottom right />
                    </RightLine>
                    {showProjectContainer && 
                        <ProjetContainer className={classActive.project2 ? "active" : ""} $reverse>
                            <ProjetPro
                                reverse
                                title={t("projetPro.title2")}
                                info={t('projetPro.info2', { returnObjects: true })}
                                tag={["Oxatis", "Shop application", "SEO", "Analytics"]}
                                image={[ClicmusicImage]}
                                infoDetails={t('projetPro.infoDetails2', { returnObjects: true })}
                                tagFirst={["Oxatis", "Shop application", "SEO", "Analytics"]}
                            />
                        </ProjetContainer>
                    }
                </RightLineContainer>
            </BodyLineSection>
        </SectionContainer>
    )
}

export default ProjetProSection
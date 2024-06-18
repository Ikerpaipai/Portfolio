import { useContext, useEffect, useRef, useState } from "react";
import { LineHorizontal, LineHorizontalContainer, LineSection, SectionsContainer, Services } from "./services-section-accueil.styles"
import TextContainerServices from "../text-container-services/text-container-services.component";
import LogoTools from "../../assets/logo-services/logo_tools.svg?react";
import LogoApi from "../../assets/logo-services/logo_api.svg?react";
import LogoDB from "../../assets/logo-services/logo_db.svg?react";
import LogoTesting from "../../assets/logo-services/logo_testing.svg?react"
import PulseCircle from "../pulse-circle/pulse-circle.component";
import { ModeContext } from "../../contexts/toggle-mode.context";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
    const [t] = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    const [pulseActive, setPulseActive] = useState({
        vertical: false,
        hor1: false,
        hor2: false,
        hor3: false,
        hor4: false,
    })
    const [infoActive, setInfoActive] = useState({
        hor1: false,
        hor2: false,
        hor3: false,
        hor4: false,
    })

    const [maxScrolled, setMaxScrolled] = useState(0);
    const [maxHeights, setMaxHeights] = useState({
        vertical: 0,
        hor1: 0,
        hor2: 0,
        hor3: 0,
        hor4: 0,
    });
    
    const lineRef = useRef(null);
    const containerRef = useRef(null);
    const horizontalLineRef1 = useRef(null);
    const horizontalLineRef2 = useRef(null);
    const horizontalLineRef3 = useRef(null);
    const horizontalLineRef4 = useRef(null);

    const hauteurHor1 = 10
    const hauteurHor2 = 33
    const hauteurHor3 = 56
    const hauteurHor4 = 79

    const maxWidth = 100;
    const speedFactor = 5.5;

    useEffect(() => {
        const handleScroll = () => {
            if (lineRef.current && containerRef.current) {
                const containerTop = containerRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                const startScroll = windowHeight / 1.3;
                if (containerTop <= startScroll) {
                    const distanceScrolled = startScroll - containerTop;
                    const maxDistance = containerRef.current.offsetHeight;
                    const scrolled = (distanceScrolled / maxDistance) * 100;

                    // Update maxScrolled if the current scrolled is greater
                    setMaxScrolled(prev => Math.max(prev, scrolled));

                    // Calculate new heights and widths based on the maxScrolled value
                    const effectiveScrolled = Math.max(maxScrolled, scrolled);
                    const newHeight = Math.min(effectiveScrolled, hauteurHor4);

                    if (newHeight > maxHeights.vertical) {
                        lineRef.current.style.height = `${newHeight}%`;
                        setMaxHeights(prev => ({ ...prev, vertical: newHeight }));
                        setPulseActive(prevState => ({ ...prevState, vertical: true }));
                        if(newHeight === hauteurHor4){
                            setPulseActive(prevState => ({ ...prevState, vertical: false }));
                        }
                    }

                    if (effectiveScrolled >= hauteurHor1) {
                        const newWidth1 = Math.min((effectiveScrolled - hauteurHor1) * speedFactor, maxWidth);
                        if (newWidth1 > maxHeights.hor1) {
                            horizontalLineRef1.current.style.width = `${newWidth1}%`;
                            setMaxHeights(prev => ({ ...prev, hor1: newWidth1 }));
                            setPulseActive(prevState => ({ ...prevState, hor1: true }));
                            if(newWidth1 === 100){
                                setInfoActive(prevState => ({ ...prevState, hor1: true }));
                            }
                        }
                    }

                    if (effectiveScrolled >= hauteurHor2) {
                        const newWidth2 = Math.min((effectiveScrolled - hauteurHor2) * speedFactor, maxWidth);
                        if (newWidth2 > maxHeights.hor2) {
                            horizontalLineRef2.current.style.width = `${newWidth2}%`;
                            setMaxHeights(prev => ({ ...prev, hor2: newWidth2 }));
                            setPulseActive(prevState => ({ ...prevState, hor2: true }));
                            if(newWidth2 === 100){
                                setInfoActive(prevState => ({ ...prevState, hor2: true }));
                            }
                        }
                    }

                    if (effectiveScrolled >= hauteurHor3) {
                        const newWidth3 = Math.min((effectiveScrolled - hauteurHor3) * speedFactor, maxWidth);
                        if (newWidth3 > maxHeights.hor3) {
                            horizontalLineRef3.current.style.width = `${newWidth3}%`;
                            setMaxHeights(prev => ({ ...prev, hor3: newWidth3 }));
                            setPulseActive(prevState => ({ ...prevState, hor3: true }));
                            if(newWidth3 === 100){
                                setInfoActive(prevState => ({ ...prevState, hor3: true }));
                            }
                        }
                    }

                    if (effectiveScrolled >= hauteurHor4) {
                        const newWidth4 = Math.min((effectiveScrolled - hauteurHor4) * speedFactor, maxWidth);
                        if (newWidth4 > maxHeights.hor4) {
                            horizontalLineRef4.current.style.width = `${newWidth4}%`;
                            setMaxHeights(prev => ({ ...prev, hor4: newWidth4 }));
                            setPulseActive(prevState => ({ ...prevState, hor4: true }));
                            if(newWidth4 === 100){
                                setInfoActive(prevState => ({ ...prevState, hor4: true }));
                            }
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [maxScrolled, maxHeights]);


    return(
        <SectionsContainer ref={containerRef} $nightMode={isOn}>
            <LineSection ref={lineRef} $nightMode={isOn}><PulseCircle active={pulseActive.vertical} right bottom /></LineSection>
            <LineHorizontalContainer>
                <LineHorizontal ref={horizontalLineRef1} $top={hauteurHor1 + "%"} $nightMode={isOn}><PulseCircle active={pulseActive.hor1} right bottom /></LineHorizontal>
                <LineHorizontal ref={horizontalLineRef2} $top={hauteurHor2 + "%"} $nightMode={isOn}><PulseCircle active={pulseActive.hor2} right bottom /></LineHorizontal>
                <LineHorizontal ref={horizontalLineRef3} $top={hauteurHor3 + "%"} $nightMode={isOn}><PulseCircle active={pulseActive.hor3} right bottom /></LineHorizontal>
                <LineHorizontal ref={horizontalLineRef4} $top={hauteurHor4 + "%"} $nightMode={isOn}><PulseCircle active={pulseActive.hor4} right bottom /></LineHorizontal>
            </LineHorizontalContainer>
            <Services>
                <TextContainerServices
                    title= {t("services.title1")}
                    info= {t("services.info1")}
                    LogoComponent= {LogoTools}
                    top= "5%"
                    classActive= {infoActive.hor1}
                />
                <TextContainerServices
                    title= {t("services.title2")}
                    info= {t("services.info2")}
                    LogoComponent= {LogoApi}
                    top= "13%"
                    classActive= {infoActive.hor2}
                />
                <TextContainerServices
                    title= {t("services.title3")}
                    info= {t("services.info3")}
                    LogoComponent= {LogoDB}
                    top= "21%"
                    classActive= {infoActive.hor3}
                />
                <TextContainerServices
                    title= {t("services.title4")}
                    info= {t("services.info4")}
                    LogoComponent= {LogoTesting}
                    top= "29%"
                    classActive= {infoActive.hor4}
                />
            </Services>
        </SectionsContainer>
    )
}

export default ServicesSection
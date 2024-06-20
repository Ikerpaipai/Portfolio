import { useContext, useState } from "react"
import { ModeContext } from "../../../contexts/toggle-mode.context"
import { useTranslation } from "react-i18next"

import Tag from "../../tag/tag.component"

import { Container, FlexContainerTitle, ImageFlexContainer, ImagePrincipale, ImageSelect, InfoContainer, LibrairieContainer, LibrairieSection, Paragraphe, Step, StepContainer, StepResponsiveContainer, Title, TitleLibrairie } from "./project-pro-popup.styles"

import ArrowRight from "../../../assets/logo-divers/arrow-right.svg?react"
import ArrowLeft from "../../../assets/logo-divers/arrow-left.svg?react"

/* eslint-disable react/prop-types */
const ProjectProPopup = ({image, title, infoDetails, tagFirst, tagSecond}) => {
    const [t] = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    const [index, setIndex] = useState(0)
    const [isImageZoomed, setIsImageZoomed] = useState(false);

    const handleImageSelect = (index) => {
        setIndex(index)
    }

    const handleIncrementIndex = (index) => {
        if(index < image.length - 1){
            setIndex(index + 1)
        }else{
            setIndex(0)
        }
    }
    const handleDecrementIndex = (index) => {
        if(index > 0){
            setIndex(index - 1)
        }else{
            setIndex(image.length - 1)
        }
    }

    const toggleImageZoom = () => {
        setIsImageZoomed(!isImageZoomed);
    };

    return(
        <Container>
            <ImagePrincipale
                src={image[index]}
                onClick={toggleImageZoom} 
                $isZoomed={isImageZoomed}
            />
            <ImageFlexContainer>
                {image.map((item, index) => (
                    <ImageSelect
                        key={index}
                        $image={item}
                        onClick={() => handleImageSelect(index)}
                    />
                ))}
            </ImageFlexContainer>
            <InfoContainer>
                <FlexContainerTitle>
                    <Title $nightMode={isOn}>{title}</Title>
                    <StepResponsiveContainer $nightMode={isOn}>
                        <ArrowLeft onClick={()=>handleDecrementIndex(index)} />
                        <ArrowRight onClick={()=>handleIncrementIndex(index)} />
                    </StepResponsiveContainer>
                </FlexContainerTitle>
                <Paragraphe $nightMode={isOn}>{infoDetails[index]}</Paragraphe>
            </InfoContainer>
            {infoDetails.length > 1 && <StepContainer>
                <Step onClick={()=>handleDecrementIndex(index)} $nightMode={isOn}>{t("projetPro.precedent")}</Step>
                <Step onClick={()=>handleIncrementIndex(index)} $nightMode={isOn}>{t("projetPro.suivant")}</Step>
            </StepContainer>}
            <LibrairieSection>
                <TitleLibrairie $nightMode={isOn}>{t("projetPro.stacksPrincipales")}</TitleLibrairie>
                <LibrairieContainer>
                    {tagFirst.map((item, index) => (
                        <Tag key={index} title={item}/>
                    ))}
                </LibrairieContainer>
                {tagSecond &&
                <>
                    <TitleLibrairie $nightMode={isOn}>{t("projetPro.stacksAutres")}</TitleLibrairie>
                    <LibrairieContainer>
                        {tagSecond.map((item, index) => (
                            <Tag key={index} title={item}/>
                        ))}
                    </LibrairieContainer>
                </>}
            </LibrairieSection>
        </Container>
    )
}

export default ProjectProPopup
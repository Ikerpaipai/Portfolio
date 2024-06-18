import { useContext, useState } from "react"
import { Container, ImageFlexContainer, ImagePrincipale, ImageSelect, InfoContainer, LibrairieContainer, LibrairieSection, Paragraphe, Step, StepContainer, Title, TitleLibrairie } from "./project-pro-popup.styles"
import Tag from "../../tag/tag.component"
import { ModeContext } from "../../../contexts/toggle-mode.context"

/* eslint-disable react/prop-types */
const ProjectProPopup = ({image, title, infoDetails, tagFirst, tagSecond}) => {
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
                <Title $nightMode={isOn}>{title}</Title>
                <Paragraphe $nightMode={isOn}>{infoDetails[index]}</Paragraphe>
            </InfoContainer>
            {infoDetails.length > 1 && <StepContainer>
                <Step onClick={()=>handleDecrementIndex(index)} $nightMode={isOn}>Précédent</Step>
                <Step onClick={()=>handleIncrementIndex(index)} $nightMode={isOn}>Suivant</Step>
            </StepContainer>}
            <LibrairieSection>
                <TitleLibrairie $nightMode={isOn}>Technologies principales :</TitleLibrairie>
                <LibrairieContainer>
                    {tagFirst.map((item, index) => (
                        <Tag key={index} title={item}/>
                    ))}
                </LibrairieContainer>
                {tagSecond &&
                <>
                    <TitleLibrairie $nightMode={isOn}>Autres technologies :</TitleLibrairie>
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
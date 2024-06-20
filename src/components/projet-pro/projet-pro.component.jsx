/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import Tag from "../tag/tag.component"
import { FlexContainer, IconContainer, ImageSection, Info, InfoContainer, InfoSection, TagContainer, Title, TitleResponsive, VoirPlus } from "./projet-pro.styles"
import Popup from "../popup/popup.component"
import ProjectProPopup from "../popup/project-pro-popup/project-pro-popup.component"
import { ModeContext } from "../../contexts/toggle-mode.context"
import { useTranslation } from "react-i18next"

const ProjetPro = ({reverse, title, info, tag, infoDetails, tagFirst, tagSecond, image}) => {
    const [t] = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    const [showPopup, setShowPopup] = useState(false)

    const handleShowPopup = () => {
        setShowPopup(o => !o)
    }

    return(
        <FlexContainer $reverse={reverse}>
            <ImageSection $image={`url(${image[0]})`} $nightMode={isOn} />
            <InfoSection $reverse={reverse}>
                <Title $nightMode={isOn}>{title}</Title>
                <InfoContainer $nightMode={isOn}>
                    <TitleResponsive $nightMode={isOn}>{title}</TitleResponsive>
                    {info.map((line, index) => (
                        <Info key={index} $nightMode={isOn}>{line}</Info>
                    ))}
                    <TagContainer>
                        {tag.map(item => (
                            <Tag key={item} title={item}/>
                        ))}
                    </TagContainer>
                    <VoirPlus onClick={handleShowPopup} $nightMode={isOn}>{t("projetPro.voirDetails")}</VoirPlus>
                </InfoContainer>
                <IconContainer>

                </IconContainer>
            </InfoSection>
                    {showPopup &&
                        <Popup showPopup handleShowPopup={handleShowPopup}>
                            <ProjectProPopup
                                image={image}
                                title={title}
                                infoDetails={infoDetails}
                                tagFirst={tagFirst}
                                tagSecond={tagSecond}
                            />
                        </Popup>
                    }
        </FlexContainer>
    )
}

export default ProjetPro
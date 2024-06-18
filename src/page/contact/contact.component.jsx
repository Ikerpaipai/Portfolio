import { Body, FlexContainer, FormSection, ImageSection, SpanSubTitle, SubTitle, Title, TitleContainer } from "./contact.styles"
import ImageContact from "../../assets/illustrations/contact.svg?react"
import Form from "../../components/form/form.component"
import LuminousCursor from "../../components/cursor/cursor.composant"
import { useContext } from "react"
import {ModeContext} from "../../contexts/toggle-mode.context"
import { useTranslation } from "react-i18next"

const Contact = () => {
    const [t] = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    return(
        <Body $nightMode={isOn}>
            {isOn && <LuminousCursor />}
            <TitleContainer>
                <Title $nightMode={isOn}>{t("contact.title")}</Title>
                <SubTitle $nightMode={isOn}><SpanSubTitle $nightMode={isOn}>{t("contact.subTitleSpan")}</SpanSubTitle>{t("contact.subTitle")}</SubTitle>
            </TitleContainer>
            <FlexContainer>
                <ImageSection $nightMode={isOn}>
                    <ImageContact />
                </ImageSection>
                <FormSection>
                    <Form />
                </FormSection>
            </FlexContainer>
        </Body>
    )
}

export default Contact
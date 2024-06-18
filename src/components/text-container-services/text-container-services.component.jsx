import { useContext } from "react"
import { Container, ImageSection, Info, InfoSection, Logo, Title, Transition } from "./text-container-services.styles"
import { ModeContext } from "../../contexts/toggle-mode.context"

const TextContainerServices = ({title, info, LogoComponent, top, classActive}) => {
    const {isOn} = useContext(ModeContext)
    return(
        <Transition className={classActive ? "active" : ""} $top={top}>
            <Container $nightMode={isOn}>
                <InfoSection $nightMode={isOn}>
                    <Title $nightMode={isOn}><Logo />{title}</Title>
                    <Info $nightMode={isOn}>{info}</Info>
                </InfoSection>
                <ImageSection $nightMode={isOn}>
                    <LogoComponent />
                </ImageSection>
            </Container>
        </Transition>
    )
}

export default TextContainerServices
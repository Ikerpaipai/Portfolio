/* eslint-disable react/prop-types */
import { Container, LogoContainer, Title } from "./skill.styles"
import LogoSVG from "../../logo-svg/logo-svg.component"
import { useContext } from "react"
import { ModeContext } from "../../../contexts/toggle-mode.context"

const Skill = ({title, logo, active, delay}) => {
    const {isOn} = useContext(ModeContext)

    return(
        <Container $nightMode = {isOn} className={active && "active"} $delay={delay}>
            <Title $nightMode = {isOn}>{title}</Title>
            <LogoContainer>
                {logo.map(item => (
                    <div key={item.name}>
                        <LogoSVG LogoComponent={item.name} minHeight="25px" height="2vw" cursor active={item.opacity} name={item.alt} tag/>
                    </div>
                ))}
            </LogoContainer>
        </Container>
    )
}

export default Skill
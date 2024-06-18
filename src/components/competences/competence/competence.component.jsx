import LogoSVG from "../../logo-svg/logo-svg.component"
import Flash from "../../../assets/logo-divers/flash.svg?react"
import { Container } from "./competence.styles"
import { useContext } from "react"
import { ModeContext } from "../../../contexts/toggle-mode.context"

const Competence = ({info, delay, active}) => {
    const {isOn} = useContext(ModeContext)
    return(
        <Container $nightMode={isOn} $delay={delay} className={active && "active"}>
            <LogoSVG LogoComponent={Flash} height="20px" />
            {info}
        </Container>
    )
}

export default Competence
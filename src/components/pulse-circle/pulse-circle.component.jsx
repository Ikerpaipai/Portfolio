import { Container } from "./pulse-circle.styles"

const PulseCircle = ({active, bottom, right, left}) => {
    return(<Container className={active? "active" : ""} $bottom={bottom} $right={right} $left={left} />)
}

export default PulseCircle
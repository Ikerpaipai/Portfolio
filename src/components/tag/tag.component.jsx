import { useContext } from "react"
import { TagContainer } from "./tag.styles"
import { ModeContext } from "../../contexts/toggle-mode.context"

const Tag = ({title})=>{
    const {isOn} = useContext(ModeContext)
    return(
        <TagContainer $nightMode={isOn}>
            {title}
        </TagContainer>
    )
}

export default Tag
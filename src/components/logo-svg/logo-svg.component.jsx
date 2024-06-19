import { useState } from "react"
import { LogoContainer, TagContainer } from "./logo-svg.styled"

const LogoSVG = ({height, LogoComponent, cursor, tag, active, name, fill, hoverFill, stroke, strokeWidth, minHeight}) => {
    const [tagActive, setTagActive] = useState(false)

    const handleTag = () => {
        setTagActive(prev => !prev)
    }

    return(
        <div style={{position: "relative", display: "flex", justifyContent: "center"}}>
            <LogoContainer
                $height={height}
                $minHeight={minHeight}
                $cursor={cursor}
                $tag={tag} $active={active}
                onMouseEnter={handleTag}
                onMouseLeave={handleTag}
                $fill={fill}
                $hoverFill={hoverFill}
                $stroke={stroke}
                $strokeWidth={strokeWidth}>
                <LogoComponent />
            </LogoContainer>
            {tag && tagActive && <TagContainer>{name}</TagContainer>}
        </div>
    )
}

export default LogoSVG
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import { Backflip, BottomBackContainer, BottomSection, Card, CardBack, CardFront, CardInner, Detail, Info, InfoContainer, LinkWeb, NumberContainer, StackTitle, SubTitle, TagContainer, Title, TitleContainer } from "./projet-perso.styles"
import { ModeContext } from "../../contexts/toggle-mode.context"

import Tag from "../tag/tag.component"
import LogoSVG from "../logo-svg/logo-svg.component"
import LogoLink from "../../assets/logo-divers/link.svg?react"

const ProjetPerso = ({show, number, title, smallInfo, info, stack, image, link}) => {
    const {isOn} = useContext(ModeContext)
    const [active, setActive] = useState(false)
    const [flipped, setFlipped] = useState(false);

    useEffect(()=>{
        if(show){
            setActive(true)
            setFlipped(false)
        }else{
            setActive(false)
            setFlipped(false)
        }
    }, [show, active])

    const handleFlip = () => {
        setFlipped(prev => !prev);
    };

    return(
        <Card className={active && "active"}>
            <CardInner className={flipped ? "flipped" : ""}>
                <CardFront $nightMode={isOn} $image={`url(${image})`} className={active && "active"}>
                    {active && !flipped &&
                        <LinkWeb to={link} className="link-web" target="_blank">
                            <LogoSVG LogoComponent={LogoLink} height="5vw" minHeight="50px" fill={isOn ? "#64FFDA" : "#64748B"} />
                        </LinkWeb>
                    }
                    <BottomSection className={!flipped && "active"}>
                        <InfoContainer>
                            <TitleContainer>
                                <NumberContainer>{number}</NumberContainer>
                                <div>
                                    <Title $nightMode={isOn}>{title}</Title>
                                    <SubTitle $nightMode={isOn}>{smallInfo}</SubTitle>
                                </div>
                            </TitleContainer>
                            <Detail onClick={handleFlip} $nightMode={isOn}>Voir détails</Detail>
                        </InfoContainer>
                    </BottomSection>
                </CardFront>
                <CardBack $nightMode={isOn}>
                    <Info $nightMode={isOn}>{info}</Info>
                    <div>
                        <StackTitle $nightMode={isOn}>Stack utilisée :</StackTitle>
                        <TagContainer>
                            {stack.map((item, index) => (
                                <div key={index}>
                                    <Tag title={item}/>
                                </div>
                            ))}
                        </TagContainer>
                    </div>
                    <BottomBackContainer>
                        <Backflip $nightMode={isOn} onClick={handleFlip}>Retour</Backflip>
                        <div></div>
                    </BottomBackContainer>
                </CardBack>
            </CardInner>
        </Card>
    )
}

export default ProjetPerso
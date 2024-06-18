import { Logo, FlagsContainer, Container } from "./select-langage.styles"
import FlagFrance from "../../assets/drapeau/france.svg?react"
import FlagSpain from "../../assets/drapeau/spain.svg?react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const SelectLangage = () => {
    const {i18n} = useTranslation("global")
    const [selectedLang, setSelectedLang] = useState('fr')
    const [showOptions, setShowOptions] = useState(false)
    const [classOptions, setClasseOptions] = useState(false)

    useEffect(()=>{
        if(showOptions){
            setTimeout(() => {
                setClasseOptions(true)
            }, 40);
        }
        setClasseOptions(false)
    },[showOptions])
    const handleMouseEnter = () => {
        setShowOptions(true)
    }

    const handleMouseLeave = () => {
        setShowOptions(false)
    }

    const handleSelectLang = (lang) => {
        i18n.changeLanguage(lang)
        setSelectedLang(lang)
        setShowOptions(false)
    }
    return(  
        <Container>
            <Logo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex: "10000", top: "2px"}}>
                {selectedLang === 'fr' ? <FlagFrance /> : <FlagSpain />}
            </Logo>
                {showOptions && (
                    <FlagsContainer className={classOptions ? "active" : ""} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {selectedLang !== 'fr' && (
                            <Logo onClick={() => handleSelectLang('fr')} $marginTop="2px">
                                <FlagFrance />
                            </Logo>
                        )}
                        {selectedLang !== 'es' && (
                            <Logo onClick={() => handleSelectLang('es')} $marginTop="2px">
                                <FlagSpain />
                            </Logo>
                        )}
                    </FlagsContainer>
                )}
        </Container>      
    )
}

export default SelectLangage
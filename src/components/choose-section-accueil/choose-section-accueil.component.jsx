
import SectionAccueil from "../section-accueil/section-accueil.component"
import { SectionsContainer } from "./choose-section-accueil.styles"
import ServicesLogo from "../../assets/logo-divers/services.svg?react"
import ListLogo from "../../assets/logo-divers/list.svg?react"
import CodeLogo from "../../assets/logo-divers/code.svg?react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const ChooseSection = ({active}) => {
    const [t] = useTranslation("global")
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);            
        }, 1000);
    }, []);

    return(
        <SectionsContainer className={show && "active"}>
            <SectionAccueil
                title={t("choose-section.title1")}
                info={t("choose-section.info1")}
                LogoComponent={ServicesLogo}
                circleColor="#FF7C33"
                containerColor= "#FFEDE2"
                active={active === "services"}
            />
            <SectionAccueil
                title={t("choose-section.title2")}
                info={t("choose-section.info2")}
                LogoComponent={ListLogo}
                circleColor="#7C3AED"
                containerColor= "#F2EFFF"
                active={active === "projet-pro"}
            />
            <SectionAccueil
                title={t("choose-section.title3")}
                info={t("choose-section.info3")}
                LogoComponent={CodeLogo}
                circleColor="#83CD29"
                containerColor= "#DCE8CD"
                active={active === "projet-perso"}
            />
    </SectionsContainer>
    )
}

export default ChooseSection
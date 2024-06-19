import { Outlet } from "react-router-dom"
import { Burger, BurgerContainer, NavLink, NavLinkResponsive, Navigation, RightSide, Row, Separateur } from "./navigation-bar.styles"
import SelectLangage from "../../components/select-langage/select-langage.component"
import Toggle from "../../components/toggle/toggle.component"
import { useContext, useEffect, useState } from "react"
import { ModeContext } from "../../contexts/toggle-mode.context"
import { useTranslation } from "react-i18next"
import LuminousCursor from "../../components/cursor/cursor.composant"
import LogoIker from "../../components/logo-iker/logo-iker.component"
import LogoSVG from "../../components/logo-svg/logo-svg.component"
import BurgerSVG from "../../assets/logo-divers/burger.svg?react"

const NavigationBar = () => {
    const {t} = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeBurger, setActiveBurger] = useState(false);

    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            
            const scrollTop = window.scrollY;
            if (scrollTop <= 0) {
                setShow(true);
                return;
            }

            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [lastScrollY]);

    const handleToggleBurger = () => {
        setActiveBurger(prev => !prev)
    }

    const handleScrollShow = () => {
        document.body.classList.remove("no-scroll");
    }

    return(
        <>
            <Navigation className={show ? "active" : "hidden"} $colorNav={isOn}>
                {isOn && <LuminousCursor />}
                <LogoIker />
                <RightSide $colorText={isOn}>
                    <NavLink to="/" onClick={handleScrollShow}>{t("navigation.link1")}</NavLink>
                    <NavLink to="/about" onClick={handleScrollShow}>{t("navigation.link2")}</NavLink>
                    <NavLink to="/contact" onClick={handleScrollShow}>{t("navigation.link3")}</NavLink>
                    <Burger onClick={handleToggleBurger}>
                        <LogoSVG LogoComponent={BurgerSVG} height="25px" stroke={isOn ? "#D7E4F8" : "#334155"} strokeWidth="2px" cursor />
                    </Burger>
                    <SelectLangage />
                    <Toggle />
                </RightSide>
            </Navigation>
            <BurgerContainer className={activeBurger && "active"} $nightMode={isOn}>
                <Row className={activeBurger && "active"}>
                    <NavLinkResponsive
                        to="/"
                        onClick={() => {handleToggleBurger(), handleScrollShow()}}
                        $nightMode={isOn}
                    >
                        {t("navigation.link1")}
                    </NavLinkResponsive>
                </Row>
                    <Separateur className={activeBurger && "active"} $nightMode={isOn}/>
                <Row className={activeBurger && "active"}>
                    <NavLinkResponsive
                        to="/about"
                        onClick={() => {handleToggleBurger(), handleScrollShow()}}
                        $nightMode={isOn}
                    >
                        {t("navigation.link2")}
                    </NavLinkResponsive>
                </Row>
                    <Separateur className={activeBurger && "active"} $nightMode={isOn}/>
                <Row className={activeBurger && "active"}>
                    <NavLinkResponsive
                        to="/contact"
                        onClick={() => {handleToggleBurger(), handleScrollShow()}}
                        $nightMode={isOn}
                    >
                        {t("navigation.link3")}
                    </NavLinkResponsive>
                </Row>
            </BurgerContainer>
            <Outlet />
        </>
    )
}

export default NavigationBar
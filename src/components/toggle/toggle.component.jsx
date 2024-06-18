import { useContext } from "react";
import { motion } from "framer-motion";
import LightLogo from "../../assets/logo-divers/light.svg?react"
import NightLogo from "../../assets/logo-divers/night.svg?react"
import "./toggle.styles.css";
import { ModeContext } from "../../contexts/toggle-mode.context";

const Toggle = () => {
    const {isOn, toggleSwitch} = useContext(ModeContext)

    return (
        <div className="switch" data-ison={isOn} onClick={toggleSwitch} style={{zIndex: "15"}}>
          <motion.div className="handle" layout transition={spring}>
            {isOn ? <NightLogo className="icon"/> : <LightLogo className="icon" />}
          </motion.div>
        </div>
      );
}

export default Toggle

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
};
import { useContext, useEffect, useState } from "react"
import { CrossContainer, Overlay, PopupContainer } from "./popup.styles"
import { ImCross } from "react-icons/im";
import { ModeContext } from "../../contexts/toggle-mode.context";

const Popup = ({showPopup, children, handleShowPopup})=>{
    const {isOn} = useContext(ModeContext)
    const [transition, setTransition] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            if(showPopup){
                setTransition(true)
                document.body.classList.add("no-scroll");
            }
        }, 0);
    },[])

    return(
        <Overlay $nightMode={isOn}>
            <PopupContainer className={transition && "active"} $nightMode={isOn}>
            <CrossContainer onClick={handleShowPopup} $nightMode={isOn}>
                <ImCross onClick={() => document.body.classList.remove("no-scroll")} />
            </CrossContainer>
                {children}
            </PopupContainer>
        </Overlay>
    )
}

export default Popup
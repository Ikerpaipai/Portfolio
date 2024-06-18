import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext({
    isOn : false,
    toggleSwitch: () => {}
})

export const ModeProvider = ({children}) => {
    const getCurrentMode = () => {
        const now = new Date();
        const hours = now.getHours();
        return hours < 8 || hours >= 19;
      };
    
      const [isOn, setIsOn] = useState(getCurrentMode());
    
      const toggleSwitch = () => setIsOn(!isOn);
    
      useEffect(() => {
          const currentMode = getCurrentMode();
          if (isOn !== currentMode) {
            setIsOn(currentMode);
          }
      }, []);

    const value = {
        isOn,
        toggleSwitch
    }
    return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>
}
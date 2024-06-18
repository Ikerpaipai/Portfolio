/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ImageLogo } from "./header-logo.styles";

const HeaderLogo = ({ top, left, LogoComponent, duration, keyframe, delay }) => {
    const [isFloating, setIsFloating] = useState(false);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsFloating(true);
      }, 2400); // Attendez la fin de la première animation
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <ImageLogo
        $top={top}
        $left={left}
        $duration={duration}
        $keyframe={keyframe}
        $delay={delay}
        className={isFloating ? "floating" : ""}
      >
        <LogoComponent />
      </ImageLogo>
    );
  };
  
  export default HeaderLogo;
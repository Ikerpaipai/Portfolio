import { useEffect, useState } from 'react';
import { Cursor } from './cursor.styles';

const LuminousCursor = () => {
  const [move, setMove] = useState({top: "", left: ""})

  useEffect(() => {
    const handleMouseMove = (e) => {
      let top = `${e.pageY}px`;
      let left = `${e.pageX}px`;

      setMove({ top: top, left: left });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <Cursor className="cursor" $top={move.top} $left={move.left} />;
};

export default LuminousCursor;
import React, { useState, useEffect } from 'react';

const Button = (props) => {
  const [active, setActive] = useState(false);
  const isActive = active ? 'active' : '';

  const keyPressHandler = (e) => {
    // CTRL+S COMBO WAS PRESSED
    if (e.keyCode === 83) {
      setActive(!active);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  })

  return (
    <button type="button" onClick={() => setActive(!active)} className={`button-skill button-skill-stripes ${props.className} ${isActive}`}>
      { props.context }
    </button>
  )
}

export default Button;

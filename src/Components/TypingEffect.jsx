import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = ({string}) => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings : string,
      typeSpeed: 100, // Typing speed
      backSpeed: 50, // Backspacing speed
      backDelay: 1000, // Pause before deleting
      startDelay: 500,
      loop: true, // Infinite loop
      showCursor: false,
    });

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="mx-1">
      <span ref={typedElement} className="text-amber-500"></span>
      <span className="animate-blink text-amber-500">|</span>
    </div>
  );
};

export default TypingEffect;

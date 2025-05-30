import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const handleLinkHover = () => setCursorVariant('link');
    const handleLinkLeave = () => setCursorVariant('default');

    const links = document.querySelectorAll('a, button');
    
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    link: {
      height: 48,
      width: 48,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      mixBlendMode: 'difference',
    },
  };

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-50 border border-white"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 rounded-full pointer-events-none z-50 border border-white"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          height: 16,
          width: 16,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.3 }}
      />
    </>
  );
};

export default CursorEffect;
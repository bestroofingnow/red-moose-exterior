"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor - Moose Head Outline */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
            rotate: isHovering ? 5 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {/* Moose head outline */}
          <motion.path
            d="M50 10 
               C35 10 25 25 25 40
               L15 35 L10 45 L20 50
               C20 55 22 60 25 65
               L25 80 C25 85 30 90 50 90 C70 90 75 85 75 80
               L75 65 C78 60 80 55 80 50
               L90 45 L85 35 L75 40
               C75 25 65 10 50 10Z"
            fill="none"
            stroke={isHovering ? "#C41E3A" : "#1F2937"}
            strokeWidth="3"
            animate={{
              stroke: isHovering ? "#C41E3A" : "#1F2937",
            }}
          />
          {/* Eyes */}
          <motion.circle
            cx="40"
            cy="45"
            r="4"
            fill={isHovering ? "#C41E3A" : "#1F2937"}
          />
          <motion.circle
            cx="60"
            cy="45"
            r="4"
            fill={isHovering ? "#C41E3A" : "#1F2937"}
          />
          {/* Nose */}
          <motion.ellipse
            cx="50"
            cy="65"
            rx="8"
            ry="6"
            fill={isHovering ? "#C41E3A" : "#1F2937"}
          />
          {/* Antlers */}
          <motion.path
            d="M25 35 L15 20 M15 20 L10 25 M15 20 L20 20
               M75 35 L85 20 M85 20 L90 25 M85 20 L80 20"
            fill="none"
            stroke={isHovering ? "#C41E3A" : "#1F2937"}
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{
              strokeWidth: isHovering ? 3 : 2.5,
            }}
          />
        </motion.svg>
      </motion.div>

      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#C41E3A] opacity-30 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.05 }}
      />
    </>
  );
}

"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastXRef = useRef(0);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      // Update DOM directly for instant response - bypass React state
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      // Determine direction based on movement
      const deltaX = e.clientX - lastXRef.current;
      if (Math.abs(deltaX) > 2) {
        setFacingLeft(deltaX < 0);
      }
      lastXRef.current = e.clientX;
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
  }, []);

  if (!isVisible) return null;

  // Calculate scale based on state
  const scale = isClicking ? 0.8 : isHovering ? 1.2 : 1;
  const scaleX = facingLeft ? -scale : scale;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: -100,
        top: -100,
        transform: "translate(-50%, -50%)",
        willChange: "left, top",
      }}
    >
      <div
        style={{
          transform: `scale(${scaleX}, ${scale})`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image
          src="/images/moose-cursor.png"
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}

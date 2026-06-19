import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const haloRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports hover (desktop with fine pointer mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsMobile(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    const updatePosition = (e: MouseEvent) => {
      if (haloRef.current) {
        haloRef.current.style.left = `${e.clientX}px`;
        haloRef.current.style.top = `${e.clientY}px`;
        haloRef.current.style.opacity = "1";
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        dotRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (haloRef.current) haloRef.current.style.opacity = "0";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      if (haloRef.current) haloRef.current.style.opacity = "1";
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    // Track active interactions
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target && (
          target.closest("button") || 
          target.closest("a") || 
          target.closest('[role="button"]') ||
          target.classList.contains("interactive-hover")
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", updatePosition, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
      window.addEventListener("mouseover", handleMouseOver, { passive: true });
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Lagging outer halo */}
      <div
        ref={haloRef}
        id="cursor-halo"
        className="custom-cursor hidden md:block opacity-0"
        style={{
          transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.2s, width 0.2s, height 0.2s, opacity 0.2s",
          transform: `translate(-50%, -50%) scale(${isHovered ? 2.5 : 1})`,
          borderColor: isHovered ? "rgba(59, 130, 246, 0.8)" : "rgba(255, 255, 255, 0.3)",
          backgroundColor: isHovered ? "rgba(59, 130, 246, 0.1)" : "transparent",
        }}
      />
      {/* Instant inner pointer dot */}
      <div
        ref={dotRef}
        id="cursor-pointer"
        className="custom-cursor-dot hidden md:block opacity-0"
        style={{
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
}

"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rx = 0, ry = 0;
    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (dot.current) {
        dot.current.style.left = x + "px";
        dot.current.style.top = y + "px";
      }
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (ring.current) {
        ring.current.style.left = x + "px";
        ring.current.style.top = y + "px";
      }
    };

    const grow = () => ring.current?.style.setProperty("transform", "translate(-50%,-50%) scale(1.8)");
    const shrink = () => ring.current?.style.setProperty("transform", "translate(-50%,-50%) scale(1)");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}

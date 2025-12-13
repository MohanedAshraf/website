import React, { forwardRef, useRef } from "react";
import clsx from "clsx";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: "default" | "glass";
  align?: "center" | "start";
}

// eslint-disable-next-line react/display-name
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, style, variant = "default", align = "center" }, ref) => {
    const localRef = useRef<HTMLDivElement | null>(null);
    // ... ref setup ...
    const setRef = (node: HTMLDivElement | null) => {
      localRef.current = node;
      if (typeof ref === "function") ref(node as HTMLDivElement);
      else if (ref && typeof ref === "object") {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    const onMouseMove = (e: React.MouseEvent) => {
      if (!localRef.current) return;
      const rect = localRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      localRef.current.style.setProperty("--glass-x", `${x}%`);
      localRef.current.style.setProperty("--glass-y", `${y}%`);
    };

    const onMouseLeave = () => {
      if (!localRef.current) return;
      localRef.current.style.setProperty("--glass-x", `50%`);
      localRef.current.style.setProperty("--glass-y", `50%`);
    };

    if (variant === "glass") {
      return (
        <div
          ref={setRef}
          className={clsx(
            "h-full select-none overflow-hidden rounded-3xl relative liquidGlass-wrapper",
            "shadow-[0_14px_28px_rgba(0,0,0,0.12)] dark:shadow-none transition-shadow duration-500 hover:shadow-[0_24px_48px_rgba(0,0,0,0.16)]",
            className
          )}
          style={{
            WebkitBackdropFilter: "blur(28px) saturate(135%)",
            backdropFilter: "blur(100px) saturate(200%)",
            backgroundColor: "rgba(255,255,255,0.015)",
            ...style,
          }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <span className="liquidGlass-effect rounded-3xl pointer-events-none ring-1 ring-white/20 dark:ring-white/10" />
          <span className="liquidGlass-tint rounded-3xl pointer-events-none" />
          <span className="liquidGlass-reflection rounded-3xl pointer-events-none" />
          <span className="liquidGlass-shine rounded-3xl pointer-events-none" />
          <span className="liquidGlass-glow" />
          <div className={clsx(
            "relative z-10 h-full w-full",
            align === "center" ? "flex items-center justify-center" : ""
          )}>
            {children}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={setRef}
        className={clsx(
          "h-full select-none overflow-hidden rounded-3xl dark:bg-dark-900",
          "shadow-sm transition-shadow duration-500 hover:shadow-lg",
          className
        )}
        style={style}
      >
        {children}
      </div>
    );
  }
);

export default Card;

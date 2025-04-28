import React, { ReactNode } from "react";
import styles from "./GradientText.module.css";

interface GradientTextProps {
  children: ReactNode;
  colors?: string[];
  animationSpeed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function GradientText({
  children,
  // colors = ["#86f7d7", "#9f0fff", "#ff1fc7"],
  colors = ["#86f7d7", "#9f0fff", "#ff99ff"],
  animationSpeed = 6,
  className = "",
  style = {},
}: GradientTextProps) {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(270deg, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
    ...style,
  };

  return (
    <div
      className={`${styles.gradientText} ${className}`}
      style={gradientStyle}
    >
      {children}
    </div>
  );
}

import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  colors?: string[];
  animationSpeed?: number;
  className?: string; 
}

export default function GradientText({
  children,
  colors = ["#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 6,
  className = "", 
}: GradientTextProps) {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(270deg, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    animation: `gradient ${animationSpeed}s linear infinite`,
  };

  return (
    <>
      <style>
        {`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
      <div style={gradientStyle} className={className}>
        {children}
      </div>
    </>
  );
}

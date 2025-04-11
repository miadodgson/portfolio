import React from "react";
import styles from './GradientCard.module.css';


interface CardProps {
    icon: React.ReactNode; // Icon as a React Node (e.g., emoji or image)
    title: string;
    text: string; // Main text content
  }
  
  const GradientCard: React.FC<CardProps> = ({ icon, title, text}) => {
    return (
      <div className={styles.card}>
        <div className={styles.cardIcon}>{icon}</div>
        <div className={styles.title}>{title}</div>
          <a className={styles.text}>{text}
          </a>
      </div>
    );
  };

export default GradientCard;
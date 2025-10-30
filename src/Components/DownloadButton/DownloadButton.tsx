import React from "react";
import styles from "./DownloadButton.module.css";
import CV from "../../Assets/CV.pdf"; 

interface DownloadButtonProps {
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ className }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;         
    link.download = "CV.pdf"; 
    link.click();
  };

  return (
    <button
      className={`${styles.Btn} ${className || ""}`}
      onClick={handleDownload}
    >
      <svg
        className={styles.svgIcon}
        viewBox="0 0 384 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 
          0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 
          14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 
          0s-12.5 32.8 0 45.3l160 160z" />
      </svg>
      <span className={styles.icon2}></span>
      <span className={styles.tooltip}>Download</span>
    </button>
  );
};

export default DownloadButton;

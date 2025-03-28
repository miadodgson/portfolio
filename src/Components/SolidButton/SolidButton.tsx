import styles from './SolidButton.module.css'


interface SolidButtonProps {
  label: string
  onClick?: () => void
  style?: {}
}

const SolidButton = ({ label, onClick, style }: SolidButtonProps) => {
  return (
    <button
      className={styles.solidButton}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
};

export default SolidButton
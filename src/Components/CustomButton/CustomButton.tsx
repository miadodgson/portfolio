import styles from './CustomButton.module.css'


interface CustomButtonProps {
  label: string
  onClick?: () => void
  style?: {}
}

const CustomButton = ({
  label,
  onClick,
  style,
}: CustomButtonProps) => {
  return (
    <button
      className={styles.customButton}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
};

export default CustomButton;
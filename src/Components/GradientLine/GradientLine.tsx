import styles from './GradientLine.module.css'

const Component = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.gradientLine1}></div>
				<div className={styles.gradientLine2}></div>
				<div className={styles.gradientLine3}></div>
				<div className={styles.gradientLine4}></div>
				<div className={styles.backgroundMask}></div>
			</div>
			<span className={styles.blurEffect}></span>
		</div>
	);
};

export default Component;
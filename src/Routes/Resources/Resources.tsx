import styles from './Resources.module.css';
// import ReactIcon from '../../Assets/Images/ReactIcon2.svg'
// import FreepikIcon from '../../Assets/Images/FreepikIcon.png'


const Resources = () => {
	const handleClick = () => {
		window.open('https://uiverse.io', '_blank');
	};
	return (
		<div className={styles.container} >
			{/* <img src={ReactIcon} className={styles.reactIcon} alt="React Icon"/> */}
			<button className={styles.button} onClick={handleClick}>
				<div className={styles.ui}>UI</div>VERSE
			</button>
			{/* <img src={FreepikIcon} className={styles.freepikIcon} alt="Freekpik Icon"/> */}
			<a href="https://www.flaticon.com/free-icons/navigation" title="navigation icons">Navigation icons created by Freepik - Flaticon</a>
		</div>
	)
}


export default Resources
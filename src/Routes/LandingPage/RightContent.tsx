import styles from './LandingPage.module.css'
import GradientLine from '../../Components/GradientLine/GradientLine'


const RightContent = () => {
	return (
		<div className={styles.rightContent}>
			<h1 className={styles.h1}> About Me
			</h1>
			<GradientLine/>
			<p className={styles.p}>A biochemist with a passion for molecular biology, medicine, and sustainability.
			</p>
		</div>
	)
}

export default RightContent
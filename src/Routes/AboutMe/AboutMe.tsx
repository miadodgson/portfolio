import styles from './AboutMe.module.css'


const AboutMe = () => {
	return (
		<div>
			<h1 className={styles.aboutMe}>
				About Me
			</h1>
			<hr />
			<h2 className={styles.h2}>
				A biochemist with a passion for molecular biology, medicine, and sustainability.
			</h2>
		</div>
	)
}

export default AboutMe
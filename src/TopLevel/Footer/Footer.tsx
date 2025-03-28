import styles from './Footer.module.css'
import ReactIcon from '../../Assets/Images/React.svg'


const Footer = () => {
	return (
		<div className={styles.footer}>
			<h1 className={styles.h1}>Created in React</h1>
			<img src={ReactIcon} className={styles.icon} alt="React Icon"/>
		</div>
	)
}

export default Footer
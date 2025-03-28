import styles from './Contact.module.css'
import ContactCard from '../../Components/ContactCard/ContactCard'


const Contact = () => {
	return (
		<div className={styles.contact}>
			<ContactCard/>
		</div>
	)
}

export default Contact
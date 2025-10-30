import styles from './Contact.module.css'
import ContactCard from '../../Components/ContactCard/ContactCard'
import ContactUs from '../../Components/ContactUs/ContactUs'

const Contact = () => {
	return (
		<div className={styles.contact}>
			<ContactUs/>
			<ContactCard/>
		</div>
	)
}

export default Contact
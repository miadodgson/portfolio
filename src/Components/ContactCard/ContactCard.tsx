import styles from './ContactCard.module.css';
import Socials from '../Socials/Socials'
import MyImage from '../../Assets/Images/MyImage.png'

const ContactCard = () => {
  return (
    <div className={`${styles.eCard} ${styles.playing}`}>
      <div className={styles.image}></div>

      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>

      <div className={styles.infoTop}>
			<img src={MyImage} className={styles.icon} alt="My Image"/>
			<p className={styles.name}>
	        Maria Dodgson
			</p>
        <div className={styles.container}>
				  <Socials />
        </div>
      </div>
    </div>
  );
};

export default ContactCard
import styles from './LandingPage.module.css'
import LeftContent from './LeftContent'
import RightContent from './RightContent'


const LandingPage = () => {
  return (
	  <div className={styles.contentContainer}>
			<LeftContent />
			<RightContent />
    </div>
  )
}

export default LandingPage

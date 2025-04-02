import styles from './LandingPage.module.css'
import AboutMe from './AboutMe/AboutMe'
// import LeftContent from './LeftContent'
// import RightContent from './RightContent'

const LandingPage = () => {
  return (
    <div>
      <AboutMe />
      {/* 
      <div className={styles.contentContainer}>
        <LeftContent />
        <RightContent />
      </div>
      */}
    </div>
  )
}

export default LandingPage
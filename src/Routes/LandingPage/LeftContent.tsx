import CustomButton from '../../Components/CustomButton/CustomButton';
import styles from './LandingPage.module.css';
import img from '../../Assets/Images/MyImage.png';

const LeftContent = () => {

  const handleClick = () => {
    window.location.href = 'mailto:mddodgson@mun.ca';
  };

  return (
    <div className={styles.leftContent}>
      <img src={img} alt="Profile Homepage" className={styles.profileImage} />
      <h1 className={styles.jobTitle}>Biochemistry Researcher</h1>
      <CustomButton label="Contact Me" onClick={handleClick} />
    </div>
  );
};

export default LeftContent;

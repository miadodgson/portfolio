import styles from './Publications.module.css';
import GradientLine from '../../Components/GradientLine/GradientLine';
import Paper from '../../Assets/Images/Paper.jpeg';
import SolidButton from '../../Components/SolidButton/SolidButton';


const Publications = () => {
	const handleClick = () => {
		window.open('https://academic.oup.com/nar/article/51/17/9385/7231338', '_blank');
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>Publications</h1>
			<GradientLine />
			<img src={Paper} className={styles.paper} alt="Publication" />
			<SolidButton label='Read More' onClick={handleClick} />
		</div>
	);
};

export default Publications;
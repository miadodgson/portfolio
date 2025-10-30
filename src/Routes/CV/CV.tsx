import styles from './CV.module.css';
import GradientLine from '../../Components/GradientLine/GradientLine';
import Paper from '../../Assets/Images/Paper.jpeg';
import SolidButton from '../../Components/SolidButton/SolidButton';
import PearlButton from '../../Components/PearlButton/PearlButton';
import DownloadButton from '../../Components/DownloadButton/DownloadButton';

const CV = () => {
	const handleClick = () => {
		window.open('https://academic.oup.com/nar/article/51/17/9385/7231338', '_blank');
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>CV</h1>
			<GradientLine />
			{/*
			<img src={Paper} className={styles.paper} alt="Publication" />
			<SolidButton label='Read More' onClick={handleClick} />
			*/}
			<DownloadButton className={styles.download}/>
		</div>
	);
};

export default CV;
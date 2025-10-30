import styles from './Publications.module.css';
import GradientLine from '../../Components/GradientLine/GradientLine';
import Paper from '../../Assets/Images/Paper.jpeg';
import SolidButton from '../../Components/SolidButton/SolidButton';
import PearlButton from '../../Components/PearlButton/PearlButton';
import DownloadButton from '../../Components/DownloadButton/DownloadButton';
import CV from '../../Assets/Images/CV.pdf';

const Publications = () => {
	const handleClick = () => {
		window.open('https://academic.oup.com/nar/article/51/17/9385/7231338', '_blank');
	};

	return (
		<div> 
			{/*<h3 className={styles.h3}>Maria Dodgson</h3>*/}
		<div className={styles.container}>
			<h1 className={styles.h1}>Publications</h1>
			<GradientLine />
			{/*
			<img src={Paper} className={styles.paper} alt="Publication" />
			<SolidButton label='Read More' onClick={handleClick} />
			*/}
				<div>
					<PearlButton className={styles.read} onClick={handleClick}/>
				</div>
				<div>
			<h1 className={styles.h2}>Download My CV</h1></div>
			<GradientLine />
				<div>
					<DownloadButton className={styles.download}/>
				</div>
			</div>	
		</div>
	);
};

export default Publications;
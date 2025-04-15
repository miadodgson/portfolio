import React from "react";
import styles from './AboutMe.module.css';
import Looseleaf from "../../../Components/Looseleaf/Looseleaf";
import GradientCard from "../../../Components/GradientCard/GradientCard";
import GradientText from '../../../Text/GradientText';
import SplitText from '../../../Text/SplitText';

const handleAnimationComplete = () => {
	console.log('All letters have animated!');
};

const AboutMe: React.FC = () => {
	return (
		<div>
			<div>
				<SplitText
					text="Hello, no Tailwind!"
					className={styles.splitTextTitle}
					animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
					animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
					delay={100}
				/>
			</div>
			<div className={styles.titleBox}>
				<SplitText
					text="Hello, Tailwind!"
					className={styles.splitTextTitle}
					delay={150}
					animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
					animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
					easing={(t: number) => 1 - Math.pow(1 - t, 3)}
					threshold={0.2}
					rootMargin="-50px"
					onLetterAnimationComplete={handleAnimationComplete}
				/>
				<div className={styles.hello}>Hello, I'm</div>
				<div className={styles.name}>Maria Dodgson</div>
				<GradientText
					colors={["#ee82ee", "#6a5acd", "#9999ff", "#4079ff", "#40ffaa"]}
					animationSpeed={5}
					className="custom-class"
				>
					Biochemist
				</GradientText>
			</div>
			<div className={styles.container}>
				<div className={styles.cardsContainer}>
					<Looseleaf />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;

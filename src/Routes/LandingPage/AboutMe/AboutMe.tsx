import React from "react"
import styles from './AboutMe.module.css'
import Looseleaf from "../../../Components/Looseleaf/Looseleaf"
import img from '../../../Assets/Images/DiplomaIcon.png'
import GradientCard from "../../../Components/GradientCard/GradientCard"
import GradientText from '../../../Components/GradientText/GradientText'
import Lanyard from '../../../Components/Lanyard/Lanyard'


const AboutMe: React.FC = () => {
	return (
		<div>
			<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
			<div className={styles.titleBox}>
				<div className={styles.hello}> Hello,  I'm
				</div>
				<div className={styles.name}> Maria Dodgson
				</div>
				<GradientText
					colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
					animationSpeed={3}
					className="custom-class"
					>
					Add a splash of color!
				</GradientText>
				{/* <div className={styles.title}>Biochemist
				</div> */}
			</div>
			<div className={styles.container}>
					{/* <div className={styles.box}>Column 1
					</div> */}
				{/* <img src={img} alt="Achievement" className={styles.diplomaIcon} /> */}
				<div className={styles.cardsContainer}>
					<GradientCard
						icon="🏆"
						title="B Sc."
						text=""
					/>
					<GradientCard
						icon="📚"
						title="Education"
						text=""
					/>
					<GradientCard
						icon="🔬"
						title="Research"
						text=""
					/>
					<Looseleaf />
				</div>
			</div>
		</div>
	);
};

export default AboutMe
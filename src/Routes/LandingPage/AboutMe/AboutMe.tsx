import React from "react"
import styles from './AboutMe.module.css'
import Looseleaf from "../../../Components/Looseleaf/Looseleaf"
import img from '../../../Assets/Images/DiplomaIcon.png'
import GradientCard from "../../../Components/GradientCard/GradientCard"



const AboutMe: React.FC = () => {
	return (
		<div>
			<div className={styles.titleBox}>
				<div className={styles.title}>Biochemist
				</div>
			</div>
			<div className={styles.container}>
				<Looseleaf />
					<div className={styles.box}>Column 1
					</div>
				{/* <img src={img} alt="Achievement" className={styles.diplomaIcon} /> */}
				<div className={styles.cardsContainer}>
					<GradientCard
					icon="🏆"
					title="B Sc."
					text="Biochemistry."
					/>
					<GradientCard
					icon="📚"
					title="Education"
					text="MSc. Molecular Biology."
					/>
					<GradientCard
					icon="🔬"
					title="Research"
					text="Focused on protein folding."
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe
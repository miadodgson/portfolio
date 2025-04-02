import React from "react"
import styles from './AboutMe.module.css'
import Looseleaf from "../../../Components/Looseleaf/Looseleaf"



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
				<div className={styles.box}>Column 2		
				</div>
			</div>
		</div>
	);
};

export default AboutMe
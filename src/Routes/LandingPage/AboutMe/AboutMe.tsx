import React from "react"
import styles from './AboutMe.module.css'
import Lanyard from '../../../Components/Lanyard/Lanyard'
import Looseleaf from "../../../Components/Looseleaf/Looseleaf"
import img from '../../../Assets/Images/DiplomaIcon.png'
import GradientCard from "../../../Components/GradientCard/GradientCard"
import GradientText from '../../../Text/GradientText/GradientText'
import RotatingText from '../../../Text/RotatingText/RotatingText'


const AboutMe: React.FC = () => {
	return (
		<div>
			{/* <div className={styles.lanyardElement}> */}
			<Lanyard position={[0, 0, 40]} gravity={[0, -40, 0]} />
			{/* </div> */}
			<div className={styles.titleBox}>
				<div className={styles.hello}> Hello,  I'm
				</div>
				{/* <div className={styles.name}> Maria Dodgson
				</div> */}
				<GradientText className={styles.gradientText}>
					Maria Dodgson
				</GradientText>
					<div className={styles.rotatingTextContainer}>
						<RotatingText
							texts={['Biochemist', 'UI Designer', 'Scientific Co-Author', 'Conservationist']}
							mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
							staggerFrom={"last"}
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							exit={{ y: "-120%" }}
							staggerDuration={0.025}
							splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
							transition={{ type: "spring", damping: 30, stiffness: 400 }}
							rotationInterval={2000}
						/>
					</div>
				{/* <Looseleaf /> */}
			</div>
		</div>
	);
};

export default AboutMe
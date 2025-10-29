import React from "react";
import styles from "./AboutMe.module.css";
import Looseleaf from "../../../Components/Looseleaf/Looseleaf";
import GradientText from "../../../Text/GradientText/GradientText";
import SplitText from "../../../Text/SplitText/SplitText";
import Lanyard from "../../../Components/Lanyard/Lanyard";
import RotatingText from "../../../Text/RotatingText/RotatingText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const AboutMe: React.FC = () => {
  return (
	
    <div className={styles.container}>
		<div className={styles.lanyardWrapper}>
			<Lanyard position={[0, 0, 40]} gravity={[0, -40, 0]} />
		</div>
			<div className={styles.titleBox}>
				<SplitText
					text="Hello, I'm"
					className={styles.splitTextTitle}
					delay={150}
					animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
					animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
					easing={(t: number) => 1 - Math.pow(1 - t, 3)}						threshold={0.2}
					rootMargin="-50px"
					onLetterAnimationComplete={handleAnimationComplete}
				/>
				<GradientText className={styles.gradientText}>Maria Dodgson</GradientText>
				
			<div className={styles.rotatingTextContainer}>
				<RotatingText
					texts={[
							"Biochemist",
							"UI Designer",
							"Co-Author",
							"Environmentalist",
						]}
					mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
					staggerFrom={"last"}
					initial={{ y: "100%" }}
					animate={{ y: 0 }}
					exit={{ y: "-120%" }}
					staggerDuration={0.025}						splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
					transition={{ type: "spring", damping: 30, stiffness: 400 }}
					rotationInterval={2000}
				/>
				{/*<Looseleaf />*/}
			</div>
		</div>
    </div>
  );
};

export default AboutMe;
import styles from './SkillCard.module.css';

const SkillCard = () => {
	return (
		/* From Uiverse.io by naveenkumarr-onyx */
		<div className={styles.card}>
			<div className={styles.header}>My Skills</div>
				<div className={styles.body}>
					<div className={styles.skill}>
						<div className={styles.skillName }>Cell culture</div>
							<div className={styles.skillLevel}>
								<div style={{ width: '90%' }} className={styles.skillPercent}></div>
							</div>
							<div className={styles.skillPercentNumber}>90%</div>
						</div>
						<div className={styles.skill}>
							<div className={styles.skillName}>Western Blot</div>
							<div className={styles.skillLevel}>
								<div style={{ width: '80%' }} className={styles.skillPercent}></div>
							</div>
							<div className={styles.skillPercentNumber}>80%</div>
						</div>
						<div className={styles.skill}>
						<div className={styles.skillName}>qPCR</div>
						<div className={styles.skillLevel}>
						<div style={{ width: '75%' }} className={styles.skillPercent}></div>
					</div>
					<div className={styles.skillPercentNumber}>75%</div>
				</div>
			</div>
		</div>
	);
};

export default SkillCard;

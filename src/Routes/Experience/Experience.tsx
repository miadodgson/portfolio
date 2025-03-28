import styles from './Experience.module.css'
import GradientLine from '../../Components/GradientLine/GradientLine'
import SkillCard from '../../Components/SkillCard/SkillCard'


const Experience = () => {
	return (
		<div>
			<h1 className={styles.h1}>Research</h1>
			<GradientLine/>
			<br/>
			<SkillCard />
		</div>
	)
}

export default Experience
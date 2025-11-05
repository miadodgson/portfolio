import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import Nav from '../Navbar/Navbar'
import Flask from '../../Assets/Images/Flask.png'

const Header = () => {
	const navigate = useNavigate()

	return (
		<div>
			<div className={styles.header}>
				<div className={styles.loader} onClick={() => navigate('/')} >
					<img src={Flask} className={styles.loader} alt="Flask" />
				</div>				
				<Nav />
			</div>
		</div>
	)
}

export default Header
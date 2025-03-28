import { Route, Routes } from 'react-router-dom'
import styles from './Body.module.css'
import Contact from '../../Routes/Contact/Contact'
import LandingPage from '../../Routes/LandingPage/LandingPage'
import Education from '../../Routes/Education/Education'
import Experience from '../../Routes/Experience/Experience'
import Publications from '../../Routes/Publications/Publications'
import Resources from '../../Routes/Resources/Resources'


const Body = () => {
    return (
        <div className={styles.bodyContentContainer}> 
            <Routes>
                <Route path='/' element={<LandingPage />}/>
				<Route path='/Education' element={<Education />}/>
				<Route path='/Experience' element={<Experience />}/>
				<Route path='/Publications' element={<Publications />}/>
				<Route path='/Resources' element={<Resources />}/>
                <Route path='/Contact' element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default Body
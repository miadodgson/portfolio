import styles from '../App/App.module.css';
import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'


function App() {
  return (
	<div className={styles.app}>
		<Header />
	  	<Body/>
		<Footer/>
	</div>
  )
}

export default App;
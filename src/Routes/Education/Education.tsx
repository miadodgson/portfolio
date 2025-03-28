import styles from './Education.module.css';
import CardComponent from '../../Components/Cards/Cards'

const Education = () => {
  return (
    <div>
      <h1 className={styles.h1}>Education</h1>
      <h1 className={styles.h1}>Memorial University of Newfoundland</h1>

	  <CardComponent />
	  
		{/* <cardComponent
        title="Molecular Biology"
        subtitle="Card subtitle"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        imgUrl="https://picsum.photos/300/200"
        buttonText="Button"
      />

		<cardComponent
        title="Medicine"
        subtitle="Card subtitle"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        imgUrl="https://picsum.photos/300/200"
        buttonText="Button"
      />

		<cardComponent
        title="Immunology"
        subtitle="Card subtitle"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        imgUrl="https://picsum.photos/300/200"
        buttonText="Button"
      /> */}
   
    </div>
  );
};

export default Education;

import styles from './Cards.module.css'

const CardComponent = () => {
	return(
		/* From Uiverse.io by MuhammadHasann */ 
		<div className={styles.card}>
		<div className={styles.card__border}></div>
		<div className={styles.card_title__container}>
		<span className={styles.card_title}>Molecular Biology</span>
		</div>
		<hr className={styles.line} />
		<ul className={styles.card__list}>
		<li className={styles.card__list_item}>
		<span className={styles.check}>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="currentColor"
		className={styles.check_svg}
		>
		<path
		fill-rule="evenodd"
		d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
		clip-rule="evenodd"
		></path>
		</svg>
		</span>
		<span className={styles.list_text}>10 Launch Weeks</span>
		</li>
		<li className={styles.card__list_item}>
		<span className={styles.check}>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="currentColor"
		className={styles.check_svg}
		>
		<path
		fill-rule="evenodd"
		d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
		clip-rule="evenodd"
		></path>
		</svg>
		</span>
		<span className={styles.list_text}>10 Influencers Post</span>
		</li>
		<li className={styles.card__list_item}>
		<span className={styles.check}>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="currentColor"
		className={styles.check_svg}
		>
		<path
		fill-rule="evenodd"
		d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
		clip-rule="evenodd"
		></path>
		</svg>
		</span>
		<span className={styles.list_text}>100.000 Views</span>
		</li>
		<li className={styles.card__list_item}>
		<span className={styles.check}>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="currentColor"
		className={styles.check_svg}
		>
		<path
		fill-rule="evenodd"
		d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
		clip-rule="evenodd"
		></path>
		</svg>
		</span>
		<span className={styles.list_text}>10 Reddit Posts</span>
		</li>
		<li className={styles.card__list_item}>
		<span className={styles.check}>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="currentColor"
		className={styles.check_svg}
		>
		<path
		fill-rule="evenodd"
		d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
		clip-rule="evenodd"
		></path>
		</svg>
		</span>
		<span className={styles.list_text}>2 Hours Marketing Consultation</span>
		</li>
		</ul>
		<button className={styles.button}>Contact Me</button>
		</div>
	)
}
	
export default CardComponent

import React from "react";
import styles from "./FirstSection.modules.css";

const FirstSection = () => {
	return (
		<section className={styles.firstSectionContainer}>
			<div className={styles.imgContainer}></div>
			<div className={styles.textContainer}>
				<h2>Visibilizamos todas las tasas de cambio.</h2>
				<p>
					Traemos información en tiempo real de las casas de cambio y las
					monedas más importantes del mundo.
				</p>
			</div>
			<section className={styles.tableContainer}>
				<div> tablas</div>
			</section>
		</section>
	);
};

export default FirstSection;

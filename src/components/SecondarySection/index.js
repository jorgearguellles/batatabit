import React from "react";
import styles from "./SecondarySection.module.css";

const SecondarySection = () => {
	return (
		<section className={styles.SecondarySection}>
			<span className={styles.imgPatata}></span>
			<div className={styles.containerText}>
				<h2 className={styles.SecondarySectionTitle}>
					Creamos un producto sin comparación.
				</h2>
				<p className={styles.SecondarySectionText}>
					Confiable y diseñado para su uso diario.
				</p>
			</div>
			<section className={styles.containerCards}>
				<article className={styles.cardDetails}>
					<span className={styles.imgClock}></span>
					<p className={styles.cardTitle}>Tiempo Real</p>
					<p className={styles.cardBodyText}>
						Nuestro API toma información minuto a minuto sobre las tasas que más
						determinan el comportamiento.
					</p>
				</article>
				<article className={styles.cardDetails}>
					<span className={styles.imgEyes}></span>
					<p className={styles.cardTitle}>No hay tasas escondidas</p>
					<p className={styles.cardBodyText}>
						Ni en la compra o al momento de exit, Batabit siempre te muestra el
						costo real de lo que estás adquiriendo.
					</p>
				</article>
				<article className={styles.cardDetails}>
					<span className={styles.imgMoney}></span>
					<p className={styles.cardTitle}>Compara monedas</p>
					<p className={styles.cardBodyText}>
						No más rumores, con Babtabit sabrás el valor real de cada moneda en
						el mercado actual.
					</p>
				</article>
				<article className={styles.cardDetails}>
					<span className={styles.imgCheck}></span>
					<p className={styles.cardTitle}>Información confiable</p>
					<p className={styles.cardBodyText}>
						Nuestras fuentes están 100% verificadas y continuamos auditando su
						contenido mientras se actualizan.
					</p>
				</article>
			</section>
		</section>
	);
};

export default SecondarySection;

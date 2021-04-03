import React from "react";
import styles from "./LastSection.module.css";

const LastSection = () => {
	return (
		<section className={styles.lastSection}>
			<div className={styles.textContainer}>
				<h2>Escoge el plan que mejor se ajuste a ti.</h2>
				<p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
			</div>
			<section id="plans" className={styles.carouselContainer}>
				<article className={styles.carouselCard}>
					<p className={styles.recomendationCard}>Recomnedado</p>
					<div>
						<h3 className={styles.titleCard}>Pago Anual</h3>
						<p className={styles.costCard}>
							<span className={styles.simbolMoneyCard}>$</span> 99
						</p>
						<p className={styles.textCard}>
							*Ahorras $129 comparado al plan mensual.
						</p>
						<button className={styles.buttomCard}>
							Escoger este
							<span className={styles.buttomIconCard}>incono </span>
						</button>
					</div>
				</article>
			</section>
		</section>
	);
};

export default LastSection;

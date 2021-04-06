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
				<article className={styles.Card}>
					<div className={styles.planInfoCard}>
						<h3 className={styles.planTitleCard}>Pago Anual</h3>
						<p className={styles.planCostCard}>
							<span className={styles.simbolMoneyCard}>$</span> 19
						</p>
						<p className={styles.planTextCard}>
							*Ahorras $129 comparado al plan mensual.
						</p>
						<button className={styles.buttomCard}>
							Escoger este
							<span className={styles.buttomIconCard}></span>
						</button>
					</div>
				</article>
				<article className={styles.Card}>
					<p className={styles.recomendationCard}>Recomendado</p>
					<div className={styles.planInfoCard}>
						<h3 className={styles.planTitleCard}>Pago Anual</h3>
						<p className={styles.planCostCard}>
							<span className={styles.simbolMoneyCard}>$</span> 99
						</p>
						<p className={styles.planTextCard}>
							*Ahorras $129 comparado al plan mensual.
						</p>
						<button className={styles.buttomCard}>
							Escoger este
							<span className={styles.buttomIconCard}></span>
						</button>
					</div>
				</article>
				<article className={styles.Card}>
					<div className={styles.planInfoCard}>
						<h3 className={styles.planTitleCard}>Pago Anual</h3>
						<p className={styles.planCostCard}>
							<span className={styles.simbolMoneyCard}>$</span> 59
						</p>
						<p className={styles.planTextCard}>
							*Ahorras $129 comparado al plan mensual.
						</p>
						<button className={styles.buttomCard}>
							Escoger este
							<span className={styles.buttomIconCard}></span>
						</button>
					</div>
				</article>
			</section>
		</section>
	);
};

export default LastSection;

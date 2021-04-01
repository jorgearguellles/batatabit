import React from "react";
import styles from "./FirstSection.module.css";

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
				<div className={styles.currencyContainer}>
					<h3 className={styles.h3}>Monedas</h3>
					<div className={styles.table}>
						<table>
							<tr className={styles.tableRow}>
								<td className={styles.tableDataLeftTop}>Bitcoin</td>
								<td className={styles.tableDataRightTop}>
									$1.96 <span className={styles.imgTrending}></span>
								</td>
							</tr>
							<tr className={styles.tableRow}>
								<td className={styles.tableDataLeft}>Etherium</td>
								<td className={styles.tableDataRight}>$0.07</td>
							</tr>
							<tr className={styles.tableRow}>
								<td className={styles.tableDataLeft}>Ripple</td>
								<td className={styles.tableDataRight}>$2.15</td>
							</tr>
							<tr className={styles.tableRow}>
								<td className={styles.tableDataLeftBottom}>Stellar</td>
								<td className={styles.tableDataRightBottom}>$4.96</td>
							</tr>
						</table>
					</div>
					<div className={styles.currencyDate}>
						<p>
							<b> Actulizado:</b> 19 Julio 23:45{" "}
						</p>
					</div>
				</div>
			</section>
		</section>
	);
};

export default FirstSection;

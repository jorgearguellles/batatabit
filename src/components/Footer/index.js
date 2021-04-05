import React from "react";
import styles from "./Footer.module.css";

import logoFooter from "../../icons/logoFooter.svg";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<section className={styles.leftSection}>
				<ul>
					<li>
						<a href="#">LinkedIn</a>
					</li>
					<li>
						<a href="#">Crounchbase</a>
					</li>
					<li>
						<a href="#">Hackernew</a>
					</li>
				</ul>
			</section>
			<section className={styles.rightSection}>
				<img src={logoFooter} alt="Logo de batata" />
			</section>
		</footer>
	);
};

export default Footer;

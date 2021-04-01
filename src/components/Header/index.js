import React from "react";
import styles from "./Header.module.css";
import logo from "../../icons/logoBatatabit.svg";

const Header = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="Logo de batata bit" className={styles.logo} />
			<div className={styles.container}>
				<h1 className={styles.h1}>
					La próxima revolución en el intercambio de criptomonedas.
				</h1>
				<p className={styles.p}>
					Batatabit te ayuda a navegar entre los diferentes precios y
					tendencias.
				</p>
				<a href="/" className={styles.a}>
					Conoce Nuestros Planes
					<span className={styles.span}></span>
				</a>
			</div>
		</header>
	);
};

export default Header;

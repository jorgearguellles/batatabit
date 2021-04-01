import React from "react";
import styles from "./Main.module.css";
import FirstSection from "../FirstSection";
import SecondarySection from "../SecondarySection";
import ThirdSection from "../ThirdSection";
import LastSection from "../LastSection";

const Main = () => {
	return (
		<main className={styles.main}>
			<FirstSection />
			<SecondarySection />
			<ThirdSection />
			<LastSection />
		</main>
	);
};

export default Main;

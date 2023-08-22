import React from "react";

import Aside from "./Components/Aside.jsx";
import Form from "./Components/Form.jsx";
import Navbar from "./Components/Navbar.jsx";
import Payment from "./Components/Payment.jsx";

import style from "./footer.module.css";

function Footer() {
	return (
		<footer className={style.footerCtn}>
			<div className={style.position}>
				<Aside />
				<Form />
			</div>

			<Navbar />
			<Payment />

			<p className={style.footerTxt}>Site d&eacute;velopp&eacute; par Lamia CHEBEL - Copyrignt &copy; Dulce de Fruit 2023.</p>

		</footer>
	)
}

export default Footer;
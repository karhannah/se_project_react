import './Footer.css'

function Footer() {
	return (
		<footer>
			<p className = "footer__author">Developed by Karinne Hannah</p>
			<p className = "footer__year">{ new Date().getFullYear() }</p>
		</footer>

	);
}

export default Footer;

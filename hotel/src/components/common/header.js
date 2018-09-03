import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({navText, link}) => {
	return (
		<header className="header" >
			<a href="/"><img className="logo" src="../images/WebLogo.png" alt="hotel logo"/></a>
			<div className="middle"></div>
			<Link to={link} className="description">{navText}</Link>
		</header>
	);
}

export default Header;
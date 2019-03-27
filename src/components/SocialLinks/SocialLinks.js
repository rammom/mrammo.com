import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import './SocialLinks.css';

function SocialLinks() {
	return (
		<div>
			<ul>
				<a href="https://www.linkedin.com/in/mostapharammo/"><li className="link"><FaLinkedin /></li></a>
				<a href="https://github.com/rammom"><li className="link"><FaGithub /></li></a>
				<a href="https://www.instagram.com/mostapharammo/"><li className="link"><FaInstagram /></li></a>
				<a href="https://www.facebook.com/MostaphaRammo"><li className="link"><FaFacebook /></li></a>
			</ul>
		</div>
	)
}

export default SocialLinks; 
import React from 'react'
// img
import logoImg from '../../resources/home/logo.svg'
// scss
import './Header.scss'

function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<img src={logoImg} alt='logo' />
				<button className='btn'>Оформить страховку</button>
			</div>
		</header>
	)
}

export default Header

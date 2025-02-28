import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// page
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
// style
import './App.scss'


function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='h1'>TEST STAR T 1</h1>

				<Link to='/'>Страница 1</Link>
				<br />
				<Link to='/about'>Страница 2</Link>

				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</header>
		</div>
	)
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage' 
import VoltagePage from '../pages/VoltagePage'
import './App.scss'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/voltage' element={<VoltagePage />} />
			</Routes>
		</>
	)
}

export default App

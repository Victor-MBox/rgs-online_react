import React from 'react'
import { Routes, Route } from 'react-router-dom'

// page
import HomePage from '../pages/homePage/HomePage'
import PreviewVoltagePage from '../pages/previewVoltagePage/PreviewVoltagePage'
import VoltagePage from '../pages/voltagePage/VoltagePage'
// style
import './App.scss'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/preview-voltage' element={<PreviewVoltagePage />} />
				<Route path='/voltage' element={<VoltagePage />} />
				{/* <Route path='/finish' element={<FinishPage />} /> */}
			</Routes>
		</>
	)
}

export default App

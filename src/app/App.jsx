import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

// page
import HomePage from '../pages/homePage/HomePage'
import PreviewVoltagePage from '../pages/previewPage/previewVoltagePage/PreviewVoltagePage'
import PreviewDisasterPage from '../pages/previewPage/previewDisasterPage/PreviewDisasterPage'
import DisasterPage from '../pages/disasterPage/DisasterPage'
import VoltagePage from '../pages/voltagePage/VoltagePage'
import FinishPage from '../pages/finishPage/FinishPage'
// style
import './App.scss'

function App() {
	const location = useLocation()

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={location.pathname}
				initial={{ filter: 'blur(10px)', opacity: 0.6 }}
				animate={{ filter: 'blur(0px)', opacity: 1 }}
				exit={{ filter: 'blur(10px)', opacity: 0.6 }}
				transition={{ duration: 0.1, ease: 'easeInOut' }}
			>
				<Routes location={location}>
					<Route path='/' element={<HomePage />} />
					<Route path='/preview-disaster' element={<PreviewDisasterPage />} />
					<Route path='/preview-voltage' element={<PreviewVoltagePage />} />
					<Route path='/disaster' element={<DisasterPage />} />
					<Route path='/voltage' element={<VoltagePage />} />
					<Route path='/finish' element={<FinishPage />} />
				</Routes>
			</motion.div>
		</AnimatePresence>
	)
}

export default App

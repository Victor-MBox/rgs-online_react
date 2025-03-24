import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// data
import { finishScreens } from './finishScreens'
// img

// style
import './FinishPage.scss'

function FinishPage() {
	const [currentScreen, setCurrentScreen] = useState(0)

	// Предзагрузка фоновых изображений
	useEffect(() => {
		const isMobile = window.innerWidth <= 1024
		const images = isMobile
			? [bgMob1, bgMob2, bgMob4, bgMob5, bgMob6]
			: [bg1, bg2, bg3, bg4, bg5, bg6]
		images.forEach(src => {
			const img = new Image()
			img.src = src
		})
	}, [])

	// Автопереключение экрана, задано в autoSwitchProps
	useEffect(() => {
		const { autoSwitchProps } = voltageScreens[currentScreen]
		if (autoSwitchProps && autoSwitchProps.thereIs && autoSwitchProps.delay) {
			const timer = setTimeout(() => {
				handleNextScreen()
			}, autoSwitchProps.delay * 1000)
			return () => clearTimeout(timer)
		}
	}, [currentScreen])

	const { bgClassName, autoSwitchProps } = finishScreens[currentScreen]

	return (
		<div className='final-screen'>
			<AnimatePresence exitBeforeEnter>
				<motion.div
					key={voltageScreens[currentScreen].id}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
					className={`screen ${bgClassName || ''}`}
				>
					<>
						<Header />
					</>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default FinishPage

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Replica from '../../components/replica/Replica'
// data
import { disasterScreens } from './disasterScreens'
// components
import ControlPanel from '../../components/controlPanel/СontrolPanel'
// img
import bg1 from '../../resources/disaster/preview_disaster_bg_01.webp'
import bg2 from '../../resources/disaster/preview_disaster_bg_02.webp'
import bgMob1 from '../../resources/disaster/preview_disaster_bg_mob_01.webp'
import bgMob2 from '../../resources/disaster/preview_disaster_bg_mob_02.webp'

// style
import './DisasterPage.scss'

function DisasterPage() {
	const [currentScreen, setCurrentScreen] = useState(0)

	// Предзагрузка фоновых изображений
	useEffect(() => {
		const isMobile = window.innerWidth <= 1024
		const images = isMobile ? [bgMob1, bgMob2] : [bg1, bg2]
		images.forEach(src => {
			const img = new Image()
			img.src = src
		})
	}, [])

	const handleNextScreen = () => {
		setCurrentScreen(prev =>
			prev < disasterScreens.length - 1 ? prev + 1 : prev
		)
	}

	// Автопереключение экрана, задано в autoSwitchProps
	useEffect(() => {
		const { autoSwitchProps } = disasterScreens[currentScreen]
		if (autoSwitchProps && autoSwitchProps.thereIs && autoSwitchProps.delay) {
			const timer = setTimeout(() => {
				handleNextScreen()
			}, autoSwitchProps.delay * 1000)
			return () => clearTimeout(timer)
		}
	}, [currentScreen])

	// Кол-во экранов с pagination: true
	const totalPaginationCount = disasterScreens.filter(
		screen => screen.pagination
	).length

	const activePaginationIndex =
		disasterScreens
			.slice(0, currentScreen + 1)
			.filter(screen => screen.pagination).length - 1

	const {
		bgClassName,
		sidebar,
		girl,
		womanProps,
		replicaGirlProps,
		replicaWomanProps,
		textСontrolPanel,
		textButton,
		invisibleButtonProps,
		coinIconProps,
		disasterFinal,
		pagination,
	} = disasterScreens[currentScreen]

	return (
		<div className='screen-container disaster'>
			<AnimatePresence exitBeforeEnter>
				<motion.div
					key={disasterScreens[currentScreen].id}
					initial={{ opacity: 0.4 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0.4 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className={`screen ${bgClassName || ''}`}
				>
					{sidebar && (
						<div className='screen__sidebar-wrapper'>
							<img src={sidebar} alt='sidebar' />
						</div>
					)}

					{girl && (
						<div className='screen__girl-container'>
							<img className='screen__girl' src={girl} alt='girl' />
						</div>
					)}

					{replicaGirlProps.replicaText && (
						<Replica
							text={replicaGirlProps.replicaText}
							className={replicaGirlProps.className}
						/>
					)}

					{/* 
					{womanProps.woman && (
						<div className='screen__woman-container'>
							<img
								className={`screen__woman ${womanProps.className || ''}`}
								src={womanProps.woman}
								alt='woman'
							/>
						</div>
					)}
					{replicaWomanProps.replicaText && (
						<Replica
							text={replicaWomanProps.replicaText}
							className={replicaWomanProps.className}
							span={replicaWomanProps.replicaTextSpan}
						/>
					)}*/}
					{textСontrolPanel && (
						<ControlPanel
							textBtn={textButton}
							text={textСontrolPanel}
							onNext={handleNextScreen}
							paginationData={{
								total: totalPaginationCount,
								active: activePaginationIndex,
							}}
						/>
					)}

					{/* {disasterFinal && <DisasterFinal />} */}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default DisasterPage

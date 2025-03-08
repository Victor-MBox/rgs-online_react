import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Replica from '../../components/replica/Replica'
// data
import { voltageScreens } from './voltageScreens'
// components
import ControlPanel from '../../components/controlPanel/СontrolPanel'
import VoltageFinal from '../../components/voltageFinal/VoltageFinal'
// img
import bg1 from '../../resources/voltage/volt_bg_1.webp'
import bg2 from '../../resources/voltage/volt_bg_2.webp'
import bg3 from '../../resources/voltage/volt_bg_3.webp'
import bg4 from '../../resources/voltage/volt_bg_4.webp'
import bg5 from '../../resources/voltage/volt_bg_5.webp'
import bg6 from '../../resources/voltage/volt_bg_6.webp'
import coinIcon from '../../resources/voltage/coin_icon.svg'
// style
import './VoltagePage.scss'

function VoltagePage() {
	const [currentScreen, setCurrentScreen] = useState(0)

	useEffect(() => {
		// Предзагрузка фоновых изображений
		const images = [bg1, bg2, bg3, bg4, bg5, bg6]
		images.forEach(src => {
			const img = new Image()
			img.src = src
		})
	}, [])

	const handleNextScreen = () => {
		setCurrentScreen(prev =>
			prev < voltageScreens.length - 1 ? prev + 1 : prev
		)
	}

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

	// Вычисляем данные для пагинации:
	// Количество экранов с pagination: true
	const totalPaginationCount = voltageScreens.filter(
		screen => screen.pagination
	).length

	// Активный индекс среди экранов с pagination: true.
	// Считаем, сколько экранов с pagination:true прошло до текущего экрана.
	const activePaginationIndex =
		voltageScreens
			.slice(0, currentScreen + 1)
			.filter(screen => screen.pagination).length - 1

	const {
		bgClassName,
		sidebar,
		boy,
		womanProps,
		replicaBoyProps,
		replicaWomanProps,
		textСontrolPanel,
		textButton,
		invisibleButtonProps,
		coinIconProps,
		voltageFinal,
		pagination,
	} = voltageScreens[currentScreen]

	return (
		<div className='screen-container'>
			<AnimatePresence exitBeforeEnter>
				<motion.div
					key={voltageScreens[currentScreen].id}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
					className={`screen ${bgClassName || ''}`}
				>
					{sidebar && (
						<div className='screen__sidebar-wrapper'>
							<img src={sidebar} alt='sidebar' />
						</div>
					)}
					{boy && <img className='screen__boy' src={boy} alt='boy' />}
					{replicaBoyProps.replicaText && (
						<Replica
							text={replicaBoyProps.replicaText}
							className={replicaBoyProps.className}
						/>
					)}
					{womanProps.woman && (
						<img
							className={`screen__woman ${womanProps.className || ''}`}
							src={womanProps.woman}
							alt='woman'
						/>
					)}
					{replicaWomanProps.replicaText && (
						<Replica
							text={replicaWomanProps.replicaText}
							className={replicaWomanProps.className}
							span={replicaWomanProps.replicaTextSpan}
						/>
					)}
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
					{invisibleButtonProps.isVisible && (
						<button
							className={`invisible-button ${
								invisibleButtonProps.className || ''
							}`}
							onClick={handleNextScreen}
						></button>
					)}

					{coinIconProps.coinIcon && (
						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{
								delay: coinIconProps.delay,
								duration: 0.5,
								ease: 'easeInOut',
							}}
							className={`coin-icon ${coinIconProps.className || ''}`}
							src={coinIcon}
							alt='icon'
						/>
					)}
					{voltageFinal && <VoltageFinal />}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default VoltagePage

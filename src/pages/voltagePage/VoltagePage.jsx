import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Replica from '../../components/replica/Replica'
import СontrolPanel from '../../components/controlPanel/СontrolPanel'
import VoltageFinal from '../../components/voltageFinal/VoltageFinal'
import { voltageScreens } from './voltageScreens'
import coinIcon from '../../resources/voltage/coin_icon.svg'
import './VoltagePage.scss'

// img импорты...

function VoltagePage() {
	const [currentScreen, setCurrentScreen] = useState(0)
	const nodeRef = useRef(null)

	useEffect(() => {
		// Предзагрузка фоновых изображений
		const images = [
			/* bg1, bg2, ... */
		]
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
						<СontrolPanel
							textBtn={textButton}
							text={textСontrolPanel}
							onNext={handleNextScreen}
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

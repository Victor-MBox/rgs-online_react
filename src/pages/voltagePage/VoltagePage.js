import React, { useState } from 'react'
import Replica from '../../components/replica/Replica'
import СontrolPanel from '../../components/controlPanel/СontrolPanel'

import { voltageScreens } from './voltageScreens'
import coinIcon from '../../resources/voltage/coin_icon.svg'

import './VoltagePage.scss'
//img

function VoltagePage() {
	// Состояние для текущего индекса экрана
	const [currentScreen, setCurrentScreen] = useState(0)

	// Хендлер переключения
	const handleNextScreen = () => {
		setCurrentScreen(prev => {
			if (prev < voltageScreens.length - 1) {
				return prev + 1
			}
			return prev
		})
	}

	// Достаем данные для текущего экрана
	const {
		bg,
		sidebar,
		boy,
		womanProps,
		replicaBoyProps,
		replicaWomanProps,
		textСontrolPanel,
		textButton,
		invisibleButtonProps,
		coinIconProps,
	} = voltageScreens[currentScreen]

	return (
		<div className='screen'>
			<img className='screen__bg' src={bg} alt='background' />

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
					className={`invisible-button ${invisibleButtonProps.className || ''}`}
					onClick={handleNextScreen}
				></button>
			)}

			{coinIconProps.coinIcon && (
				<img
					className={`coin-icon ${coinIconProps.className || ''}`}
					src={coinIcon}
					alt='icon'
				/>
			)}

			
		</div>
	)
}

export default VoltagePage

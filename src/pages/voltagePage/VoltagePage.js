import React, { useState, useEffect } from 'react'
import Replica from '../../components/replica/Replica'
import СontrolPanel from '../../components/controlPanel/СontrolPanel'
import VoltageFinal from '../../components/voltageFinal/VoltageFinal'
import { voltageScreens } from './voltageScreens'
import coinIcon from '../../resources/voltage/coin_icon.svg'
import './VoltagePage.scss'

function VoltagePage() {
	// Состояние для текущего индекса экрана
	const [currentScreen, setCurrentScreen] = useState(0)

	// Предзагрузка всех фоновых изображений при монтировании
	useEffect(() => {
		const images = [
			require('../../resources/voltage/volt_bg_1.webp'),
			require('../../resources/voltage/volt_bg_2.webp'),
			require('../../resources/voltage/volt_bg_3.webp'),
			require('../../resources/voltage/volt_bg_4.webp'),
			require('../../resources/voltage/volt_bg_5.webp'),
			require('../../resources/voltage/volt_bg_6.webp'),
		]
		images.forEach(src => {
			const img = new Image()
			img.src = src
		})
	}, []) // Пустой массив зависимостей — выполняется один раз при монтировании

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
		<div className={`screen ${bgClassName || ''}`}>
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

			{voltageFinal && <VoltageFinal />}
		</div>
	)
}

export default VoltagePage

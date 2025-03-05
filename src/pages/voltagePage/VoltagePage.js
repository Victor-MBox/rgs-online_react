import React, { useState } from 'react'
import Replica from '../../components/replica/Replica'
import СontrolPanel from '../../components/controlPanel/СontrolPanel'

import { voltageScreens } from './voltageScreens'

import './VoltagePage.scss'

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
		replicaText,
		textСontrolPanel,
		textButton,
		invisibleButtonProps,
	} = voltageScreens[currentScreen]

	return (
		<div className='screen'>
			<img className='screen__bg' src={bg} alt='background' />
			<div className='screen__sidebar-wrapper'>
				<img src={sidebar} alt='sidebar' />
			</div>

			<img className='screen__boy' src={boy} alt='boy' />
			<Replica text={replicaText} />

			<СontrolPanel
				textBtn={textButton}
				text={textСontrolPanel}
				onNext={handleNextScreen}
			/>

			{invisibleButtonProps.isVisible && (
				<button
					className={`
					invisible-button 
       					${invisibleButtonProps.className ? invisibleButtonProps.className : ''}`}
					onClick={handleNextScreen}
				></button>
			)}
		</div>
	)
}

export default VoltagePage

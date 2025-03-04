import React, { useState } from 'react'
import Replica from '../../components/replica/Replica'
import TextWithButton from '../../components/controlPanel/СontrolPanel'

import boyImg1 from '../../resources/voltage/boy_1.png'
import backImg1 from '../../resources/voltage/volt_bg_1.jpg'
import sidebar6 from '../../resources/sidebar/sidebar_6.svg'

import boyImg2 from '../../resources/voltage/boy_2.png'
import backImg2 from '../../resources/voltage/volt_bg_2.jpg'

import './VoltagePage.scss'

function VoltagePage() { 
	const screens = [
		{
			id: 1,
			bg: backImg1,
			sidebar: sidebar6,
			boy: boyImg1,
			replicaText: 'Это первый экран. Текст в Replica',
			textСontrolPanel: 'Здесь текст для СontrolPanel (экран 1)',
		},
		{
			id: 2,
			bg: backImg2,
			sidebar: sidebar6,
			boy: boyImg2,
			replicaText: 'Это второй экран. Другой текст Replica',
			textСontrolPanel: 'Совершенно другой текст в СontrolPanel ',
		},
	]

	// Состояние для текущего индекса экрана
	const [currentScreen, setCurrentScreen] = useState(0)

	// Хендлер переключения
	const handleNextScreen = () => {
		setCurrentScreen(prev => {
			if (prev < screens.length - 1) {
				return prev + 1
			}
			return prev
		})
	}

	// Достаем данные для текущего экрана
	const { bg, sidebar, boy, replicaText, textСontrolPanel } =
		screens[currentScreen]

	return (
		<div className='screen'>
			<img className='screen__bg' src={bg} alt='background' />
			<img className='screen__sidebar' src={sidebar} alt='sidebar' />
			<div>
				<img className='screen__boy' src={boy} alt='boy' />
				<Replica text={replicaText} />
			</div>

			<TextWithButton text={textСontrolPanel} onNext={handleNextScreen} />
		</div>
	)
}

export default VoltagePage

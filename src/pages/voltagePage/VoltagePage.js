import React from 'react'

// Компоненты
import Replica from '../../components/replica/Replica'
import TextWithButton from '../../components/textWithButton/TextWithButton'
// img
import boyImg1 from '../../resources/voltage/boy_1.png'
import backImg1 from '../../resources/voltage/volt_bg_1.jpg' 
import sidebar from '../../resources/sidebar/sidebar_6.svg'
// scss
import './VoltagePage.scss'

function VoltagePage() {
	return (
		<div className='screen'>
			<img className='screen__bg' src={backImg1} alt='img' />
			<img className='screen__sidebar' src={sidebar} alt='img' />
			<div>
				<img className='screen__boy' src={boyImg1} alt='boy' />
				<Replica />
			</div>

			<TextWithButton />
		</div>
	)
}

export default VoltagePage

import React, { useState } from 'react'

// img
import icon1 from '../../resources/voltage/key_icon.svg'
import icon2 from '../../resources/voltage/speaker_icon.svg'

import './VoltageFinal.scss'

function VoltageFinal() {
	return (
		<div className='voltage-final'>
			<svg
				width='92'
				height='134'
				viewBox='0 0 92 134'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M1.25731 127.766L83.7089 2.67114C85.8888 -0.636151 91.0344 0.897057 91.0487 4.85809L91.4193 108.118C91.4259 109.939 90.2006 111.535 88.4391 112L5.61683 133.835C2.06718 134.771 -0.762904 130.831 1.25731 127.766Z'
					fill='white'
				/>
			</svg>

			<p className='title'>Что мы оплатим по риску «Скачок напряжения»?</p>

			<div className='wrapper'>
				<div className='column'>
					<p>Ремонт техники</p>
					<img src={icon1} alt='icon' />
				</div>

				<div className='column'>
					<p>Покупку новой</p>
					<img src={icon2} alt='icon' />
				</div>
			</div>

			<p className='title'>Когда необходимо включить этот риск в полис?</p>

			<ul>
				<li></li>
				<li></li>
			</ul>
		</div>
	)
}

export default VoltageFinal

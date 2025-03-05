import React from 'react'
// scss
import './СontrolPanel.scss'

function СontrolPanel({ text, onNext, textBtn }) {
	return (
		<div className='controlPanel'>
			<p>{text}</p>
			{textBtn && textBtn.length > 0 && (
				<button className='btn' onClick={onNext}>{textBtn}</button>
			)}
			<div className='paginations'></div>
		</div>
	)
}


export default СontrolPanel

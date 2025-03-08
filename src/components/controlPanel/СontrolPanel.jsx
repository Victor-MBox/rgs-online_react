import React from 'react'
// components
import Pagination from '../pagination/Pagination'
// scss
import './СontrolPanel.scss'

function СontrolPanel({ text, onNext, textBtn, paginationData }) {
	return (
		<div className='controlPanel'>
			<p>{text}</p>
			{textBtn && textBtn.length > 0 && (
				<button className='btn' onClick={onNext}>
					{textBtn}
				</button>
			)}
			<Pagination paginationData={paginationData} />
		</div>
	)
}

export default СontrolPanel

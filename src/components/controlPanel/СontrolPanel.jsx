import React, { useState, useEffect } from 'react'
// components
import Pagination from '../pagination/Pagination'
// scss
import './СontrolPanel.scss'

function MySvgIcon() {
	return (
		<svg
			width='32'
			height='16'
			viewBox='0 0 32 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 8H31M31 8L24 1M31 8L24 15'
				stroke='black'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

function СontrolPanel({ text, onNext, textBtn, paginationData }) {
	// Состояние для отслеживания, больше ли ширина экрана 1025 пикселей
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1025)

	useEffect(() => {
		function handleResize() {
			setIsDesktop(window.innerWidth >= 1025)
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div className='controlPanel'>
			<p>{text}</p>
			{textBtn && textBtn.length > 0 && (
				<button className='btn' onClick={onNext}>
					{isDesktop ? textBtn : <MySvgIcon />}
				</button>
			)}
			<Pagination paginationData={paginationData} />
		</div>
	)
}

export default СontrolPanel

import React from 'react'
import { Link } from 'react-router-dom'

// Компоненты
import Header from '../../../components/header/Header'
import PreviewPageBanner from '../../../components/previewPageBanner/PreviewPageBanner'
// img
import backImg from '../../../resources/preview/preview_disaster_01.webp'
import backImgMob from '../../../resources/preview/preview_disaster_mob_01.webp'
import circleImg from '../../../resources/home/circle.svg'
import flagImg from '../../../resources/home/flag.svg'

// scss
import '../previewPage.scss'

import './PreviewDisasterPage.scss'

function PreviewDisasterPage() {
	return (
		<div className='preview-wrapper disaster'>
			<div className='backImg__wrapper'>
				<img className='backImg desktop' src={backImg} alt='background' />
				<img className='backImg mobile' src={backImgMob} alt='background' />

				<Link className='circle-btn' to='/Disaster'>
					<img className='circle' src={circleImg} alt='icon' />
					<img className='flag' src={flagImg} alt='icon' />
				</Link>

				<div className='hide-link' id='start'></div>
			</div>
			<>
				<Header />
			</>

			<PreviewPageBanner />
		</div>
	)
}

export default PreviewDisasterPage

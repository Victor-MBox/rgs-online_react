import React from 'react'
import { Link } from 'react-router-dom'

// Компоненты
import Header from '../../../components/header/Header'
import PreviewPageBanner from '../../../components/previewPageBanner/PreviewPageBanner'
// img
import backImg from '../../../resources/home/home-bg.webp'
import backImgMob from '../../../resources/home/home-bg_mob.webp'
import circleImg from '../../../resources/home/circle.svg'
import flagImg from '../../../resources/home/flag.svg'

// scss
import '../previewPage.scss'

import './PreviewVoltagePage.scss'

function PreviewVoltagePage() {
	return (
		<div className='preview-wrapper voltage'>
			<div className='backImg__wrapper'>
				<img className='backImg desktop' src={backImg} alt='background' />
				<img className='backImg mobile' src={backImgMob} alt='background' />

				<Link className='circle-btn' to='/voltage'>
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

export default PreviewVoltagePage

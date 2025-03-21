import React from 'react'
import { Link } from 'react-router-dom'

// components
import Header from '../../components/header/Header'
// img
import backImg from '../../resources/home/home_bg_01.webp'
import backImgMob from '../../resources/home/home_bg-mob_01.webp'
import homeImg_01 from '../../resources/home/home_img_01.webp'

// scss
import './HomePage.scss'

function HomePage() {
	return (
		<div className='home-wrapper'>
			<div className='backImg__wrapper'>
				<img className='backImg desktop' src={backImg} alt='background' />
				<img className='backImg mobile' src={backImgMob} alt='background' />
			</div>
			<>
				<Header />
			</>

			<main className='home'>
				<div className='container'>
					<div className='home__wrapper'>
						<h1 className='home__h1'>В жизни всякое может случиться</h1>
						<p>
							Прокачайте страховую и финансовую грамотность и узнайте, в каких
							жизненных ситуациях страховки реально выручают!
						</p>
						<p>
							<span>
								Вас ждут мини-квесты в 6 квартирах, секретный бонус в одной
								из них и скидка на страховую защиту жилья в конце игры.
							</span>
						</p>
						<Link className='btn' to='/preview-voltage'>
							Играть
						</Link>
					</div>

					<div className='home__img'>
						<img src={homeImg_01} alt='img' />
					</div>
				</div>
			</main>
		</div>
	)
}

export default HomePage

import React from 'react'
import { Link } from 'react-router-dom'

// Компоненты
import Header from '../../components/header/Header'
// img
import backImg from '../../resources/home/home-bg.jpg'
// scss
import './HomePage.scss'

function HomePage() {
	return (
		<div className='home-wrapper'>
			<div className='backImg__wrapper'>
				<img className='backImg' src={backImg} alt='background' />
				<Link className='circle-btn' to='/voltage'>
					{' '}
				</Link>
				<div className='hide-link' id='start'></div>
			</div>
			<>
				<Header />
			</>

			<main className='home'>
				<div className='container'>
					<h1 className='home__h1'>
						Соседи называют этот дом <br /> «ЖК Несчастье»
					</h1>
					<p className='home__subtitle'>
						Здесь каждый этаж — это испытание. А там, где флажок, случилась
						беда. Хорошо, что у жильцов есть вы!
					</p>
					<div className='home__wrapper'>
						<div>
							<p>
								Заходите в квартиры ниже <br /> с 🚩 и проходите задания.
							</p>
						</div>
						<div>
							<p>
								Помогайте, собирайте бонусы <br /> и зарабатывайте скидки!
							</p>
						</div>
					</div>
					<a className='btn' href='#start'>
						Играть
					</a>
				</div>
			</main>
		</div>
	)
}

export default HomePage

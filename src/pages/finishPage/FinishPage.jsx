import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// data
import { finishScreens, allImages } from './finishScreens.js'

// img
import shield from '../../resources/final/shield.webp'

// components
import Header from '../../components/header/Header'

// style
import './FinishPage.scss'

function FinishPage() {
	const [currentScreen, setCurrentScreen] = useState(0)

	// Предзагрузка фоновых изображений
	useEffect(() => {
		const isMobile = window.innerWidth <= 1024
		const imagesToPreload = isMobile
			? [allImages.bgMob1, allImages.bgMob2, allImages.bgMob3]
			: [allImages.bg1, allImages.bg2, allImages.bg3]

		imagesToPreload.forEach(src => {
			const img = new Image()
			img.src = src
		})
	}, [])

	const handleNextScreen = () => {
		setCurrentScreen(prev =>
			prev < finishScreens.length - 1 ? prev + 1 : prev
		)
	}

	// Автопереключение экрана, задано в autoSwitchProps
	useEffect(() => {
		const { autoSwitchProps } = finishScreens[currentScreen]
		if (autoSwitchProps && autoSwitchProps.thereIs && autoSwitchProps.delay) {
			const timer = setTimeout(() => {
				handleNextScreen()
			}, autoSwitchProps.delay * 1000)
			return () => clearTimeout(timer)
		}
	}, [currentScreen])

	const {
		bgNameProps,
		presentCloseProps,
		presentRaysProps,
		animateIconProps,
		presentOpenProps,
		contentCardPrors,
	} = finishScreens[currentScreen]

	const bgDesktop = bgNameProps.img ? allImages[bgNameProps.img] : null
	const bgMobile = bgNameProps.mob ? allImages[bgNameProps.mob] : null

	return (
		<div className='final-screen'>
			<>
				<Header />
			</>
			<AnimatePresence exitBeforeEnter>
				<motion.div
					key={finishScreens[currentScreen].id}
					initial={{ opacity: 0.4 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0.4 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className='finishPage'
				>
					<div className='finishPage__wrapper'>
						<img className='backImg desktop' src={bgDesktop} alt='background' />
						<img className='backImg mobile' src={bgMobile} alt='background' />

						{presentCloseProps.img && (
							<div className='present'>
								{presentRaysProps.img && (
									<img
										className='present__rays'
										src={presentRaysProps.img}
										alt='img'
									/>
								)}
								<img
									className={`present__package ${
										presentCloseProps.className || ''
									}`}
									src={presentCloseProps.img}
									alt='img'
									onClick={handleNextScreen}
								/>
							</div>
						)}

						{presentOpenProps.img1 && (
							<div className='present-finish'>
								<img className='one' src={presentOpenProps.img1} alt='img' />
								<div className='card'>
									<div className='card__wrapper'>
										<div className='title'>
											Поздравляем! Вы изучили все страховые случаи
										</div>
										<div className='sub-title'>
											За это вы получаете главный приз — <br /> скидку 
											<span> 20% на страхование квартиры!* </span> Вот ваш
											промокод:
										</div>
										<div className='copy'>
											<p>XXXXXX</p>
											<button className='btn'>Скопировать</button>
										</div>
										<p className='conditions'>
											*Скидка 20% по промокоду не суммируется с другими акциями
											и скидками. Промокод действует до ХХ.ХХ.2025.
										</p>
									</div>

									<div className='card__footer-wrapper'>
										<div className='card__footer'>
											<img src={shield} alt='img' />
											<p>
												Теперь вы знаете, как правильно настроить страховой
												полис и какие риски в него можно включить — пора
												обеспечить защиту вашему дому.
											</p>
										</div>
										<button className='btn footer'>
											Подключить защиту со скидкой
										</button>
									</div>
									<img className='two' src={presentOpenProps.img2} alt='img' />
								</div>
							</div>
						)}
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default FinishPage

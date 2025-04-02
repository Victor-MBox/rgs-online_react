import React, { useState, useEffect } from 'react'
import Img from '../../resources/disaster/preview_disaster_img_01.webp'
// scss
import './Banner.scss'

function Banner() {
	return (
		<div className='banner'>
			<div className='column'>
				<div className='title'>К каким рискам подходят эти повреждения?</div>
				<div className='text'>
					Перетяните названия повреждений в правильные колонки. Ориентируйтесь
					на изображения
				</div>
				<button className='btn'>Играть</button>
			</div>
			<div className='column-img'>
				<img src={Img} alt='img' />
			</div>
		</div>
	)
}

export default Banner

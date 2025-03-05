import React from 'react'
// scss
import './Replica.scss'

function Replica({ text }) {
	return (
		<div className='replica'>
			<p>{text}</p>
			<svg
				width='55'
				height='32'
				viewBox='0 0 55 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M0.225246 29.6247L3.80712 2.30826C3.93766 1.31272 4.78609 0.568278 5.79014 0.568281L52.8751 0.568351C54.9524 0.568354 55.6527 3.34302 53.8242 4.3288L3.15739 31.6452C1.72179 32.4192 0.0132024 31.2419 0.225246 29.6247Z'
					fill='white'
				/>
			</svg>
		</div>
	)
}

export default Replica

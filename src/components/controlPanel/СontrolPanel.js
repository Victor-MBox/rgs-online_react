import React from 'react'
// img
// scss

function СontrolPanel({ text, onNext }) {
	return (
		<div>
			<h1>{text}</h1>
			<button className="btn"  onClick={onNext}>Нажми</button>
		</div>
	)
}


export default СontrolPanel

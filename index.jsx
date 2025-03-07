import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './src/app/App'

import './src/style/style.scss'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)

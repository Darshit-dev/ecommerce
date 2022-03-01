/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.render(
	<>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		<Toaster />
	</>,
	document.getElementById('root')
)

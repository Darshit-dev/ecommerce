/** @format */

import { Link, Route, Routes } from 'react-router-dom'
import { Navigation } from './Components/Navigation'

import Home from './Pages/Home'
import { Product } from './Pages/Product'

const App = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/product' element={<Product />} />
			</Routes>
		</>
	)
}

export default App

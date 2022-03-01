/** @format */

import { Link, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Cart from './Pages/Cart'

import { useState, useEffect, createContext } from 'react'
// import { CartContext } from './Pages/CartContext'
import Home from './Pages/Home'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'

export const CartContext = createContext(null)

const App = () => {
	const [cart, setCart] = useState({})

	useEffect(() => {
		const cart = window.localStorage.getItem('cart')
		if (cart) {
			setCart(JSON.parse(cart))
		}
	}, [])

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<>
			<CartContext.Provider value={{ cart, setCart }}>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/product' element={<Products />} />
					<Route path='/product/:id' element={<SingleProduct />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</CartContext.Provider>
		</>
	)
}

export default App

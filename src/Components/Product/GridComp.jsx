/** @format */

import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import pizaimg from '../../images/pizalogo.png'
import { CartContext } from '../../Pages/CartContext'
import toast, { Toaster } from 'react-hot-toast'

//space
function GridComp(props) {
	//declaration
	const [isAdded, setAded] = useState(false)
	const { cart, setCart } = useContext(CartContext)

	//function
	const addToCart = (event, product) => {
		event.preventDefault()
		toast.success('Successfully added to cart')
		let _cart = { ...cart } //{emply object}
		if (!cart.items) {
			_cart.items = {}
		}
		if (_cart.items[product.id]) {
			_cart.items[product.id] += 1
		} else {
			_cart.items[product.id] = 1
		}
		if (!_cart.totalItems) {
			_cart.totalItems = 0
		}
		_cart.totalItems += 1
		setCart(_cart)

		//is button clicked or not
		setAded(true)
		setTimeout(() => {
			setAded(false)
		}, 1000)
	}

	//return function that will be rendered

	return (
		<div>
			<Link to={`/product/${props.item.id}`}>
				<div className='flex flex-col items-center justify-content '>
					<img src={pizaimg} alt='product' />

					<h1 className='font-bold '>{props.item.name}</h1>
					<span className='bg-gray-200 rounded-full px-3 text-sm py-1 '>
						small
					</span>
				</div>
				<div className='flex justify-between'>
					<span>{props.item.price}₹</span>
					<button
						disabled={isAdded}
						onClick={(event) => addToCart(event, props.item)}
						className={`${
							isAdded ? 'bg-green-500' : 'bg-yellow-400'
						} hover:bg-yellow-500 rounded-lg px-1`}
					>
						{isAdded ? 'ADDED' : 'ADD'}
					</button>
				</div>
			</Link>
		</div>
	)
}

export default GridComp

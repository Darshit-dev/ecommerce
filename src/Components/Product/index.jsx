/** @format */

import React from 'react'
import { uid } from 'uid'
import { useContext } from 'react'
import { CartContext } from '../../Pages/CartContext'
import GridComp from './GridComp'

//  pizza name array
const pizzaNames = [
	{ id: uid(14), name: 'mazza', price: 100 },
	{ id: uid(14), name: 'margherita', price: 1500 },
	{ id: uid(14), name: 'pepperoni', price: 5500 },
	{ id: uid(14), name: 'veg supreme', price: 1080 },
	{ id: uid(14), name: 'veggie', price: 500 },
	{ id: uid(14), name: 'hawaiian', price: 900 },
	{ id: uid(14), name: 'chicken supreme', price: 1200 },
	{ id: uid(14), name: 'chicken tikka', price: 1300 },
]

export default function Product() {
	//const { action } = useContext(CartContext)
	return (
		<div>
			<div className='font-bold bg-slate-100 px-1 w-20'>Products </div>
			<div className='grid grid-cols-5 my-5 gap-24'>
				{pizzaNames.map((item, index) => (
					<GridComp key={index} item={item} />
				))}
			</div>
		</div>
	)
}

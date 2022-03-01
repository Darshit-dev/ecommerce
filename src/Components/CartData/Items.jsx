/** @format */

import React from 'react'
import OneItem from './OneItem'

function Items() {
	return (
		<div className='container mx-auto lg:w-1/2 w-full pb-24'>
			<h1 className='mt-10 mb-10 font-bold'>Items</h1>
			<OneItem />
			<OneItem />
			<hr />
			<div className='text-right mt-2'>
				<b>Grand Total : 1000</b>{' '}
			</div>
			<div className='text-right mt-2'>
				<button className='bg-yellow-500 px-3 py-1 rounded-full leading-none  '>
					Order now
				</button>
			</div>
		</div>
	)
}

export default Items

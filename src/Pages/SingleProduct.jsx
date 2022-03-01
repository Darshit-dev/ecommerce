/** @format */

import React from 'react'
import pizza from '../images/pizalogo.png'
import { useNavigate } from 'react-router-dom'
function SingleProduct() {
	const navigate = useNavigate()
	function handleclick() {
		navigate(-1)
	}
	return (
		<div>
			<button
				className='bg-yellow-400 hover:bg-yellow-500 rounded-lg px-1 ml-5'
				onClick={() => {
					handleclick()
				}}
			>
				Back
			</button>
			<div className='flex jus items-center'>
				<img className='p-10' src={pizza} alt='pizza' />
				<div>
					<h1 className='text-xl font-bold'>Havana special</h1>
					<div className='text-lg'>small</div>
					<div>$100</div>
					<button className='bg-yellow-500 rounded-lg p-1'>Add to cart</button>
				</div>
			</div>
		</div>
	)
}

export default SingleProduct

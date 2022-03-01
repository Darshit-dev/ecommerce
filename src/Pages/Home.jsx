/** @format */

import React from 'react'
import Product from '../Components/Product'
import Pizamain from '../images/pizalogo.png'

function Home() {
	return (
		<div className='p-5 '>
			<div className='flex items-center'>
				<div className='flex-1'>
					<h1 className='font-bold ml-1'> Are you hungry?</h1>
					<h1 className='text-3xl md:text-6xl font-bold'>Don't wait!</h1>
					<button className='mt-5 bg-amber-400 hover:bg-amber-500 text-zinc p-2 rounded-xl'>
						Order Now
					</button>
				</div>
				<div className='flex-1'>
					<img src={Pizamain} alt='piza' />
				</div>
			</div>
			<div>
				<Product />
			</div>
		</div>
	)
}

export default Home

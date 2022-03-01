/** @format */
// @ts-check
import { useContext } from 'react'
import cartimage from '../../images/pizalogo.png'
import { CartContext } from '../../App'

function OneItem() {
	const { cart } = useContext(CartContext)
	console.log(cart)
	return (
		<div>
			<ul>
				<li className='mb-5 '>
					<div className='flex items-center justify-between'>
						<div className='flex items-center '>
							<img className='h-16' src={cartimage} alt='piza' />
							<span className='ml-5 font-bold '>margherita</span>
						</div>
						<div className=''>
							<button className='bg-yellow-500 px-3 py-1 rounded-full leading-none'>
								-
							</button>
							<span className='px-4'>2</span>
							<button className='bg-yellow-500 px-3 py-1 rounded-full leading-none '>
								+
							</button>
						</div>
						<span className=' font-bold'>500</span>
						<button className='bg-red-400 px-4 py-1 rounded-full leading-none'>
							Delete
						</button>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default OneItem

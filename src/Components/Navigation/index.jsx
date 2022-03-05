/** @format */

import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/pizalogo.png'
import cartIcon from '../../images/carts.png'
import { CartContext } from '../../Pages/CartContext'

const Navigation = () => {
	const { cart } = useContext(CartContext)
	return (
		<nav className='sticky py-2 bg-slate-50 shadow-md px-20  flex items-center justify-between '>
			<Link to='/'>
				<div className='flex'>
					<img src={logo} alt='logo' className='h-8 mr-2' />
					<span>Pizza Store</span>
				</div>
			</Link>
			<ul className='flex flex-row items-center'>
				<li>
					<Link to='/'>
						<span className='bg-slate-200 py-1 px-3 rounded-2xl leading-none shadow-sm '>
							Home
						</span>
					</Link>
				</li>
				<li className='ml-5'>
					<Link to='/product'>
						<span className='bg-slate-200 py-1 px-3 rounded-2xl leading-none shadow-sm '>
							Product1
						</span>
					</Link>
				</li>
				<li className='ml-5'>
					<Link to='/cart'>
						<div className='flex'>
							<span className='mr-1'>{cart.totalItems}</span>
							<img src={cartIcon} alt='logo' className='h-8 ' />
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation

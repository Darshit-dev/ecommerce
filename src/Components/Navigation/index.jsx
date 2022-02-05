/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../images/pizalogo.png'
import cartIcon from '../../images/carts.png'
export const Navigation = () => {
	return (
		<nav className='my-3 px-20  flex items-center justify-between '>
			<Link to='/'>
				<div className='flex'>
					<img src={logo} alt='logo' className='h-8 mr-2' />
					<span>Pizza Store</span>
				</div>
			</Link>
			<ul className='flex flex-row items-center'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li className='ml-5'>
					<Link to='/product'>Product</Link>
				</li>
				<li className='ml-5'>
					<Link to='/cart'>
						<div className='flex'>
							<span className='mr-1'>10</span>
							<img src={cartIcon} alt='logo' className='h-8 ' />
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

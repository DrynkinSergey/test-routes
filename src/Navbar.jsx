import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ routes }) => {
	return (
		<nav>
			<ul className='nav'>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				{routes.map(({ id, title }) => (
					<li key={id}>
						<NavLink to={`/${id}`}>{title}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar

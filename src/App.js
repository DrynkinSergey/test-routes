import React, { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import routes from './data/routes.json'
import Navbar from './Navbar'

const App = () => {
	const navigate = useNavigate()
	const location = useLocation()
	useEffect(() => {
		//find item inside our file, if exist it will be default
		const tabIsIncludedInFile = routes.find(item => item.id === location.pathname.slice(1))
		const defaultTab = routes.find(item => item.order === 0)
		tabIsIncludedInFile || navigate(`/${defaultTab.id}`)
	}, [])
	useEffect(() => {
		document.title = location.pathname
	}, [location.pathname])

	return (
		<>
			<Navbar routes={routes} />
			<Suspense fallback={null}>
				<Routes>
					<Route path='/' element={<div>Welcome to test task Backendless</div>} />
					{routes.map(({ id, path }) => (
						<Route key={id} path={id} element={React.createElement(lazy(() => import(`./${path}`)))} />
					))}
				</Routes>
			</Suspense>
		</>
	)
}

export default App

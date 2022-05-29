import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import initWorkerApi from 'src/api/worker/workerservice'
import routes from 'src/core/routes'

const serviceWorker = () => {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker
				.register('/service-worker.js')
				.then(registration => {
					console.log('SW registered: ', registration)
				})
				.catch(registrationError => {
					console.log('SW registration failed: ', registrationError)
				})
		})
	}
}

const App = () => {
	const workerMessageHandler = ({ data }: any) => {
		console.log('web-worker callback data:', data)
	}

	useEffect(() => {
		initWorkerApi(workerMessageHandler)
	})

	return (
			<Routes>
				{routes.map(({ fetchData, ...routeProps }) => (
					<Route key={routeProps.path} {...routeProps} />
				))}
			</Routes>
	)
}

export default App

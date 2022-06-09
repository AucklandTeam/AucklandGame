import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import initWorkerApi from 'src/api/worker/workerservice'
import routes from 'src/core/routes'
import { hot } from 'react-hot-loader/root'
import { useAppDispatch } from 'src/ssr'
import { fetchUser } from 'src/core/ducks/auth/actions'
import { useUserInfo } from 'src/core/ducks/auth/selectors'
import { getLeaderBoard } from 'src/core/ducks/scores/actions'
import { useLeaderBordInfo } from 'src/core/ducks/scores/selectors'

const App = () => {
	const dispatch = useAppDispatch()
	const { data } = useUserInfo()
	const { data: list } = useLeaderBordInfo()
	useEffect(() => {
		if (!data) {
			dispatch(fetchUser())
		}
		if (!list) {
			dispatch(getLeaderBoard())
		}
	}, [])

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

const Component = hot(App)

export { Component as App }

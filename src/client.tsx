import { hydrate } from 'react-dom'
import App from 'client/App'
import 'styles/base.scss'
import createStore from 'src/core/store'
import { Provider, useDispatch } from 'react-redux'
import history, { useInitHistory } from 'src/core/history'
import { Router } from 'react-router-dom'
import window from 'global'


	const {store} = createStore(window.SSR_DATA)
	delete window.SSR_DATA


export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

const { stateHistory } = useInitHistory()

hydrate(
	<Provider store={store}>
		<Router
			location={stateHistory.location}
			navigator={history}
			navigationType={stateHistory.action}
		>
			<App />
		</Router>
	</Provider>,
	document.querySelector('#root')
)

import { hydrate } from 'react-dom'
import { App } from 'client/App'
import 'styles/base.scss'
import { configureStore } from 'src/core/store'
import { Provider } from 'react-redux'
import { unstable_HistoryRouter as Router } from 'react-router-dom'
import history from 'src/core/history'


const { store } = configureStore(window.SSR_DATA, '/')
delete window.SSR_DATA

hydrate(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.querySelector('#root')
)

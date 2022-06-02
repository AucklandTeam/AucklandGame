import { hydrate } from 'react-dom'
import App from 'client/App'
import 'styles/base.scss'
import { configureStore } from 'src/core/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const { store } = configureStore(window.SSR_DATA, '/')
	delete window.SSR_DATA

hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
)

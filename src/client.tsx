import { hydrate } from 'react-dom'
import App from 'client/App'
import 'styles/base.scss'
import { CreateStore } from 'src/core/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

	const store = CreateStore(window.SSR_DATA)
	delete window.SSR_DATA

hydrate(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.querySelector('#root')
)

import { Request, Response } from 'express'
import { StaticRouter } from 'react-router-dom/server'
import App from 'client/App'
import serialize from 'serialize-javascript'
import { CreateStore } from 'src/core/store'
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server'
import { rootSaga } from 'src/core/saga'
import { matchPath } from 'react-router-dom'
import routes from 'src/core/routes'

export default async (req: Request, res: Response) => {
	const baseURL = req.protocol + '://' + req.headers.host + '/'
	const reqUrl = new URL(req.url, baseURL)

	const store = CreateStore({
	})

	function renderApp() {
		const appHtml = (
			<Provider store={store}>
				<StaticRouter location={req.url}>
					<App/>
				</StaticRouter>
			</Provider>
		)

		const reactHtml = renderToString(appHtml)
		const reduxState = store.getState()

		res.status(200).send(getHtml(reactHtml, reduxState))
	}
		store
			.runSaga(rootSaga)
			.toPromise()
			.then(() => renderApp())
			.catch(err => {
				throw err
			})
		const dataRequirements: (Promise<void> | void)[] = []

		routes.some(route => {
			const { fetchData: fetchMethod } = route
			const match = matchPath(reqUrl.pathname, route.path)

			if (match && fetchMethod) {
				dataRequirements.push(
					fetchMethod({
						dispatch: store.dispatch,
						match
					})
				)
			}

			return Boolean(match)
		})

		return Promise.all(dataRequirements)
			.then(() => store.close())
			.catch(err => {
				throw err
			})

}

const getHtml = (reactHtml: string, reduxState = {}) => (`
    <!DOCTYPE html>
    <html lang="en">
        <head>
           <meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Destroy Asteroids SSR</title>
				<link rel="shortcut icon" type="image/png" href="/images/favicon.png">
				<link href="/css/main.css" rel="stylesheet">
        </head>
        <body>
            <div id="root">${reactHtml}</div>
            <div id="modalWrap"></div>
            <script defer="defer" src="/main.js"></script>
			<script>
			  window.SSR_DATA = ${serialize(reduxState, { isJSON: true })}
			</script>
        </body>
    </html>
`)


import { Request, Response } from 'express'
import { StaticRouter } from 'react-router-dom/server'
import { App } from 'client/App'
import serialize from 'serialize-javascript'
import createStore from 'src/core/store'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

export default async (req: Request, res: Response) => {
	const { store } = createStore({
		initState: {}
	})

	const appHtml = (
		<Provider store={store}>
			<StaticRouter location={req.url}>
				<App />
			</StaticRouter>
		</Provider>
	)

	const html = renderToString(appHtml)
	const reduxState = store.getState()

	res.send(`
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
            <div id="root">${html}</div>
            <div id="modalWrap"></div>
            <script defer="defer" src="/server.js"></script>
			<script>
			  window.SSR_DATA = ${serialize(reduxState, { isJSON: true })}
			</script>
        </body>
    </html>
`)
}

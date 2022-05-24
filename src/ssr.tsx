import { NextFunction, Request, Response } from 'express'
import { StaticRouter } from 'react-router-dom/server'
import App from 'client/App'
import { serverRender } from '@issr/core'
import serialize from 'serialize-javascript'

export const render = async (req: Request, res: Response, next: NextFunction) => {

    const appHtml =
        <StaticRouter location={req.url}>
            <App/>
        </StaticRouter>;

    const {html, state} = await serverRender(() => appHtml);

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Destroy Asteroids SSR</title>
            <script>
              window.SSR_DATA = ${serialize(state, {isJSON: true})}
            </script>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="/app.server.js"></script>
        </body>
    </html>
`)
    next()
}

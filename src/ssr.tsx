import { Request, Response } from 'express'
import { StaticRouter } from 'react-router-dom/server'
import { App } from 'client/App'
import serialize from 'serialize-javascript'
import createStore from 'src/core/store';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import Canvas from 'canvas';
// @ts-ignore
global.Image = Canvas.Image;

export const render = async (req: Request, res: Response) => {

    const { store } = createStore({
        initState: { }
    });

    const appHtml =
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <App/>
            </StaticRouter>
        </Provider>

    const html = renderToString(appHtml);

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Destroy Asteroids SSR</title>
            <script defer="defer" src="/server.js"></script>
            <link href="/css/main.f136b428f1d329607cb8.css" rel="stylesheet">
            <script>
              window.SSR_DATA = ${serialize(store.getState(), {isJSON: true})}
            </script>
        </head>
        <body>
            <div id="root">${html}</div>
        </body>
    </html>
`)
}

import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import jsdom from 'jsdom';
import {StaticRouter} from 'react-router-dom/server'
import ReactDOMServer from 'react-dom/server';
import App from '../src/components/App/App';
import Canvas from'canvas';
global.Image = Canvas.Image;


import helmet from 'helmet';
const { JSDOM } = jsdom;
const app = express();
const PORT = process.env.PORT || 4000;


app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('../dist/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Ooops, some problem here');
        }
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        );
        global.document = new JSDOM('<div id="root"></div>').window.document;
        return res.send(data.replace('<div id="root"></div>', 
            `<div id="root">${html}</div>`));
    });
});

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
//app.use(helmet());

app.listen(PORT, function() {
    console.log(`Example app listening on port ${PORT}!`);
});

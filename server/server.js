import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/components/App/App';
import Canvas from'canvas';
global.Image = Canvas.Image;


import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 4000;

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('../dist/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Ooops, some problem here');
        }
        return res.send(data.replace('<div id="root"></div>', 
            `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`));
    });
});

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
//app.use(helmet());

app.listen(PORT, function() {
    console.log(`Example app listening on port ${PORT}!`);
});

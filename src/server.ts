import path from 'path'
import express from 'express'
import compression from 'compression'
import serverRenderMiddleware from 'src/ssr'
const { Client } = require('pg');

/*
	const client = new Client({
		user: 'postgres',
		host: 'postgres',
		database: 'auckland-db',
		password: 'root',
		port: 5432,
	});

	client.connect();

	client.query('SELECT NOW()').then((res: any) => {
		console.log(res.rows);
		client.end();
	}).catch((err: any) => {
		console.log('error', err);
	});
*/
const app = express()

app.use(compression())
    .use(express.static(path.resolve(__dirname, '../dist')))
	.use(express.static(path.resolve(__dirname, '../www')))

app.get('/*', serverRenderMiddleware)

export { app }

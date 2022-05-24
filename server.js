//const express = require('express')
//const render = require('./src/ssr.tsx')
//const helmet = require('helmet')
import express from 'express'
import {render} from './src/ssr.tsx'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.static('./public'))
//app.use(helmet())
app.get('/*', render)

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`)
})

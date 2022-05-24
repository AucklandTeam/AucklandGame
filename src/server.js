const express = require('express')
//const helmet = require('helmet')
const render = require('./ssr')

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.static('./public'))
//app.use(helmet())
app.get('/*', render)

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`)
})

import express from 'express'
import {render} from './src/ssr.tsx'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.static('./public'))

app.get('/*', render)

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`)
})

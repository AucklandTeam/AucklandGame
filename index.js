const { app } = require('./dist/server.js')

const PORT = process.env.PORT || 4000

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`)
})

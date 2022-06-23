const { app, dbConnect } = require(`${__dirname}/dist/server.js`)


const PORT = process.env.PORT || 3000

const init = async ()=>{
	await dbConnect();

	console.log(`Starting Sequelize!`);

	app.listen(PORT, function () {
		console.log(`Asteroids app listening on port ${PORT}!`)
	})
}

init();

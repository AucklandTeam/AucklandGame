require('dotenv').config()
const { app, dbConnect } = require(`${__dirname}/dist/server.js`)

const PORT = process.env.PORT || 3000

const sequelizeOptions = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    dialect: 'postgres',
}

const init = async () => {
    await dbConnect(sequelizeOptions)
    console.log(`Starting Sequelize on ${process.env.POSTGRES_HOST}`)
}

init().then(
    app.listen(PORT, function () {
        console.log(`Asteroids app listening on port ${PORT}!`)
    }),
)

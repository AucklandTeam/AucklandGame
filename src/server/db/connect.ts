import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import User from 'server/Model/user'
import Topic from 'server/Model/topic'
import TopicCategory from 'server/Model/topicCategory'
import Comment from 'server/Model/comment'
import Reply from 'server/Model/reply'


// @ts-ignore
export const sequelizeOptions: SequelizeOptions = {
	host: 'c-c9qrj8eshi2b3tho0r6m.rw.mdb.yandexcloud.net',
	port: 6432,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	dialect: 'postgres'
}

export const sequelize = new Sequelize(sequelizeOptions)

sequelize.addModels([User, Topic, TopicCategory, Comment, Reply])

export async function dbConnect() {
	try {
		await sequelize.authenticate()
		await sequelize.sync({ force: true })
		console.log('Connection has been established successfully.')
	} catch (e) {
		console.error('Unable to connect to the database:', e)
	}
}

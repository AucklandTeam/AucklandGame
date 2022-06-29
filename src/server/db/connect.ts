import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import User from 'server/Model/user'
import Topic from 'server/Model/topic'
import TopicCategory from 'server/Model/topicCategory'
import Comment from 'server/Model/comment'
import Reply from 'server/Model/reply'
import Reaction from 'server/Model/reaction'

export async function dbConnect(sequelizeOptions: SequelizeOptions) {
    try {
        const sequelize = new Sequelize(sequelizeOptions)

        sequelize.addModels([User, Topic, TopicCategory, Comment, Reply, Reaction])
        await sequelize.authenticate()
        await sequelize.sync({ force: false })
        console.log('Connection has been established successfully.')
    } catch (e) {
        console.error('Unable to connect to the database:', e)
    }
}

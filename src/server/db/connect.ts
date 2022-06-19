import {Sequelize, SequelizeOptions} from "sequelize-typescript";
import User from "server/Model/user";
import Topic from "server/Model/topic";
import TopicCategory from "server/Model/topicCategory";
import Comment from "server/Model/comment";

export const sequelizeOptions: SequelizeOptions = {
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'auckland-db',
    dialect: 'postgres',
}

export const sequelize  = new Sequelize(sequelizeOptions);

sequelize.addModels([User, Topic, TopicCategory, Comment]);

export async function dbConnect(){
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: true});
        console.log('Connection has been established successfully.');
    } catch (e) {
        console.error('Unable to connect to the database:', e);
    }
}
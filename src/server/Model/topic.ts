import {AllowNull, AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import TopicCategory from "server/Model/topicCategory";

export interface ITopic {
    label: string;
    categoryId: number;
}

@Table({
    tableName: 'topics'
})
class Topic extends Model<Topic, ITopic> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;
    @AllowNull(false)
    @Column(DataType.STRING)
    label: string;
    @ForeignKey(()=>TopicCategory)
    @Column(DataType.INTEGER)
    categoryId: number;
}

export default Topic;
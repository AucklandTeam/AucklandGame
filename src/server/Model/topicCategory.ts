import { AllowNull, AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript'
import Topic from 'server/Model/topic'

export interface ITopicCategory {
    label: string
}

@Table({
    tableName: 'topicCategories',
})
class TopicCategory extends Model<TopicCategory, ITopicCategory> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number
    @AllowNull(false)
    @Column(DataType.STRING)
    label: string
    @HasMany(() => Topic)
    topics: Topic[]
}

export default TopicCategory

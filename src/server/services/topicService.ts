import Topic from 'server/Model/topic'
import Comment from 'server/Model/comment'

class TopicService {
    async findAllByCategory(categoryId: number) {
        return await Topic.findAll({
            where: { categoryId },
            include: [
                {
                    model: Comment,
                    attributes: ['id'],
                },
            ],
        })
    }
    async findByLabel(label: string) {
       return await Topic.findOne({ where: { label } })
    }

    async findById(id: number) {
        return await Topic.findOne({ where: { id } })
    }

    async createTopic(label: string, categoryId: number) {
        return await Topic.create({ label, categoryId })
    }
}

export default new TopicService()

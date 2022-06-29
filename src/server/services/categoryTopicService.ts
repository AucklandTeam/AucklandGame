import TopicCategory from 'server/Model/topicCategory'
import Topic from 'server/Model/topic'

class CategoryTopicService {
    async getAll() {
        return await TopicCategory.findAll({
            include: [
                {
                    model: Topic,
                    attributes: ['id'],
                },
            ],
        })
    }
    async findCategoryByLabel(label: string) {
        return await TopicCategory.findOne({ where: { label } })
    }
    async createCategory(label: string) {
        const category = await this.findCategoryByLabel(label)
        if (category) {
            return 'error'
        }
        return await TopicCategory.create({ label })
    }
    async deleteCategoryByLabel(label: string) {
        const category = await this.findCategoryByLabel(label)
        return await category.destroy()
    }
}

export default new CategoryTopicService()

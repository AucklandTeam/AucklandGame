import Topic from "server/Model/topic";

class TopicService {
    async findAllByCategory(categoryId: number){
        const topics = await Topic.findAll({where: {categoryId}});
        return topics;
    }
    async findByLabel(label: string){
        const topic = await Topic.findOne({where: {label}});
        return topic;
    }

    async createTopic(label: string, categoryId: number){
        const topic = await Topic.create({label,categoryId });
        return topic;
    }
}

export default new TopicService();
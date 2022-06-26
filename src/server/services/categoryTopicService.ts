import TopicCategory from "server/Model/topicCategory";
import Topic from "server/Model/topic";

class CategoryTopicService {
    async getAll(){
        const all = await TopicCategory.findAll({
            include: [{
                model: Topic,
                attributes: ['id']
            }]
        });
        return all;
    }
    async findCategoryByLabel(label: string){
        const category = await TopicCategory.findOne({where: {label}});
        return category;
    }
    async createCategory(label: string){
        const category = await this.findCategoryByLabel(label);
        if(category){
            return 'error';
        }
        const newCategory = await TopicCategory.create({label});
        return newCategory;
    }
    async deleteCategoryByLabel(label: string){
        const category = await this.findCategoryByLabel(label);
        return await category.destroy();
    }
}

export default new CategoryTopicService();
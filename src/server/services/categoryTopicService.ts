import TopicCategory from "server/Model/topicCategory";

class CategoryTopicService {
    async getAll(){
        const all = await TopicCategory.findAll();
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
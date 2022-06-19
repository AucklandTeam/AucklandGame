import Comment, {IComment} from "server/Model/comment";
import User from "server/Model/user";

class CommentService {
    async getCommentByID(id: number){
        const comment = await Comment.findOne({where:{id}});
        return comment;
    }
    async getCommentsByTopic(topicId: number) {
        const comments = await Comment.findAll(({where: {topicId}, attributes: ['authorId', 'text','title','id'], include: {
            model: User,
                required: true,
                as: 'author',
                attributes: ['name', 'avatar']
            }}));
        return comments;
    }
    async addComment(props:IComment){
        const comment = await Comment.create(props);
        return comment;
    }

}

export default new CommentService();
import Comment, {IComment} from "server/Model/comment";
import User from "server/Model/user";

class CommentService {
    async getCommentByID(id: number){
        const comment = await Comment.findOne(
            {where:{id}});
        return comment;
    }
    async getCommentsByTopic(topicId: number) {
        const comments = await Comment.findAll((
            {where: {topicId}, include: [User]}));
        return comments;
    }
    async addComment(props:IComment){
        const comment = await Comment.create(props);
        return comment;
    }

}

export default new CommentService();
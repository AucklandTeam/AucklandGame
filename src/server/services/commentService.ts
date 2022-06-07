import Comment, {IComment} from "server/Model/comment";

class CommentService {
    async getCommentByID(id: number){
        const comment = await Comment.findOne({where:{id}});
        return comment;
    }
    async getCommentsByTopic(topicId: number) {
        const comments = await Comment.findAll(({where: {topicId}}));
        return comments;
    }
    async addComment({parentId = 0, text, author, likeCount = 0, topicId}:IComment){
        const comment = await Comment.create({author, likeCount, text, parentId, topicId});
        return comment;
    }

}

export default new CommentService();
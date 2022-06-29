import Comment, { IComment } from 'server/Model/comment'
import User from 'server/Model/user'
import Reply from 'server/Model/reply'
import Reaction from 'server/Model/reaction';

class CommentService {
    async getCommentByID(id: number) {
        const comment = await Comment.findOne(
            {where: {id}});
        return comment;
    }

    async getCommentsByTopic(topicId: number) {
        const comments = await Comment.findAll((
            {
                where: {topicId}, include: [{
                    model: User,
                    attributes: ["name", "avatar"]
                }, {
                    model: Reply,
                    include: [{
                        model: User,
                        attributes: ['name', 'avatar']
                    }],
                },
                    {
                        model: Reaction,
                        attributes: ['userId']
                    }]
            }));
        return comments;
    }

    async addComment(props: IComment) {
        const comment = await Comment.create(props);
        return comment;
    }

}

export default new CommentService()

import Comment, { IComment } from 'server/Model/comment'
import User from 'server/Model/user'
import Reply from 'server/Model/reply'
import Reaction from 'server/Model/reaction'

class CommentService {
    async getCommentByID(id: number) {
        return await Comment.findOne({ where: { id } })
    }

    async getCommentsByTopic(topicId: number) {
        return await Comment.findAll({
            where: { topicId },
            include: [
                {
                    model: User,
                    attributes: ['name', 'avatar'],
                },
                {
                    model: Reply,
                    include: [
                        {
                            model: User,
                            attributes: ['name', 'avatar'],
                        },
                    ],
                },
                {
                    model: Reaction,
                    attributes: ['userId'],
                },
            ],
        })
    }

    async addComment(props: IComment) {
        return await Comment.create(props)
    }
}

export default new CommentService()

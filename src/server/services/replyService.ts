import Reply, { IReply } from 'server/Model/reply'
import User from 'server/Model/user'

class ReplyService {
    async getCommentByID(id: number) {
        return await Reply.findOne({ where: { id } })
    }
    async getCommentsByTopic(topicId: number) {
        return await Reply.findAll({
            where: { topicId },
            include: [User],
        })
    }
    async addComment(props: IReply) {
        return await Reply.create(props)
    }
}

export default new ReplyService()

import Reply, { IReply } from 'server/Model/reply'
import User from 'server/Model/user'

class ReplyService {
	async getCommentByID(id: number) {
		const comment = await Reply.findOne({ where: { id } })
		return comment
	}
	async getCommentsByTopic(topicId: number) {
		const comments = await Reply.findAll({
			where: { topicId },
			include: [User]
		})
		return comments
	}
	async addComment(props: IReply) {
		const comment = await Reply.create(props)
		return comment
	}
}

export default new ReplyService()

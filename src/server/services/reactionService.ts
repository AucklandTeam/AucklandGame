import Reaction from 'server/Model/reaction'

class ReactionService {
    async getByReaction(userId: number, commentId: number) {
        return  await Reaction.findOne({ where: { userId, commentId } })
    }
    async add(userId: number, commentId: number) {
        return await Reaction.create({ userId, commentId })
    }
    async changeReaction(userId: number, commentId: number) {
        const element = await this.getByReaction(userId, commentId)
        if (!element) {
            await this.add(userId, commentId)
            return true
        }
        await element.destroy()
        return false
    }
}

export default new ReactionService()

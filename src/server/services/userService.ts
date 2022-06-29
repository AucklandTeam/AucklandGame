import User from 'server/Model/user'

class UserService {
    async getUserByName(name: string) {
        return User.findOne({ where: { name } })
    }
    async createUser(name: string, avatar: string) {
        return User.create({ name, avatar })
    }
    async syncUser(name: string, avatar: string) {
        const user = await this.getUserByName(name)
        if (!user) {
            return await this.createUser(name, avatar)
        }
        return user
    }
    async updateUser(id: number, name: string, avatar: string) {
        return await User.update(
            { name, avatar },
            {
                where: { id },
            },
        )
    }
}

export default new UserService()

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
			const newUser = await this.createUser(name, avatar)
			return newUser
		}
		return user
	}
	async updateUser(id: number,name: string, avatar: string ){
		const user = await User.update({name, avatar},
			{
				where: {id}
			});
		return user;
	}
}

export default new UserService()

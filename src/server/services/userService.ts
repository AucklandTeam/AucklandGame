import User from "server/Model/user";

class UserService  {
    async getUserByName(name: string){
        return User.findOne({ where: { name } });
    }
    async createUser(name: string){
        return User.create({name});
    }
    async syncUser(name:string){
        const user = await this.getUserByName(name);
        if(!user){
            const newUser = await this.createUser(name);
            return newUser;
        }
    }
}

export default new UserService();
import UserModel from '../models/user.js'

export class AuthDAO {

    static instance

    static getInstance() {
        if( !AuthDAO.instance ) {
            AuthDAO.instance = new AuthDAO()
        }
        return AuthDAO.instance
    }

    async register(user) {
        const newUser = new UserModel(user)
        const savedUser = await newUser.save()
        return savedUser
    }

    async login(username) {
        const user = await UserModel.findOne({username: username})
        return user
    }

}
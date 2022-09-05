import { AuthDAO } from "../dao/auth.dao.js"

export class AuthService {

    static instance

    static getInstance() {
        if( !AuthService.instance ) {
            AuthService.instance = new AuthService()
        }
        return AuthService.instance
    }

    async register(user) {
        const newUser = await AuthDAO.getInstance().register(user)
        return newUser
    }

    async login(username) {
        return await AuthDAO.getInstance().login(username)
    }
}
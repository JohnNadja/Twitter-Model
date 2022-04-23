const User = require ('./../Models/User')


class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user){
        return [user.id, user.username, user.name, user.bio]
    }
    static updateUserUsername(user, upUsername){
        return user.username = upUsername
    }
}

module.exports = UserService
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
    static getAllUsernames([user1, user2, user3]){
        return [user1.username, user2.username, user3.username] 
    } 
}

module.exports = UserService
const UserService = require('./../../app/services/UserService')

describe('Test for User Service', () => {
    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1, "john", "John")
        expect(user.username).toBe("john")
        expect(user.name).toBe("John")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, "JohnNadja", "John")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("JohnNadja")
        expect(userInfoInList[2]).toBe("John")
        expect(userInfoInList[3]).toBe("Sin bio")
    });
    test('3. Update username', () => {
        const user = UserService.create (1, "JohnNadja", "John")
        UserService.updateUserUsername(user, "JOHN")
        expect(user.username).toBe("JOHN")
    });
    test('4. Given a list of users, give me the list of usernames', () => {
        const user1 = UserService.create(1, "JohnNadja1", "John")
        const user2 = UserService.create(1, "JohnNadja2", "John")
        const user3 = UserService.create(1, "JohnNadja3", "John")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("JohnNadja1");
        expect(usernames).toContain("JohnNadja2");
        expect(usernames).toContain("JohnNadja3");        
    });
});
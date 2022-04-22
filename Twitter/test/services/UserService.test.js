const UserService = require('./../../app/services/UserService')

describe('Test for User Service', () => {
    test('1. Create a new user using the UserService', () => {
        const user = new UserService(1, "johnnadja", "John")
        expect(user.username).toBe("johnnadja");
        expect(user.name).toBe("John");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefinied();
    });
});
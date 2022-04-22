const User = require('./../../app/Models/User')

describe("Test para User", () =>{
    test("Creación de User", () =>{
        const user = new User (1, "JohnNadja", "John", "Bio", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1)
        expect(user.username).toBe("JohnNadja")
    })
})

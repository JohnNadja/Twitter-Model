const User = require('./../Models/User')

describe("Prueba de jest", () =>{
    test("Prueba 1", () =>{
        const user = new User (1, "JohnNadja", "John", "Bio", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1)
    })
})

const User = require('./../../app/Models/User')

describe("Test para User", () =>{
    test("Creación de User", () =>{
        const user = new User (1, "JohnNadja", "John", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("JohnNadja")
        expect(user.name).toBe("John")
        expect(user.bio).toBe("Bio")
        // expect(user.dateCreated).toBe("dateCreated")
        // expect(user.lastUpdated).toBe("lastUpdated")
    })

    test("Requerimiento 2: Fechas en atributos de User", () =>{
        const user = new User (1, "JohnNadja", "john", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.dateCreated).not.toBeUndefined()
    })

    test('Requerimiento 3: Getters en objetos', () => {
        const user = new User (1, "JohnNadja", "john", "Bio")
        expect(user.getUsername).toBe("JohnNadja")
    });
    

})

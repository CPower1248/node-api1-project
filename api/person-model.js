const shortid = require("shortid")

let users = [
    { id: shortid.generate(), name: 'Corey', bio: "Lorem ipsum" },
    { id: shortid.generate(), name: 'Aiden', bio: "Ipsum lorem" },
]

module.exports = {
    findAll() {
      // SELECT * FROM users;
      return Promise.resolve(users)
    }, // findAll().then().catch()
  
    findById(id) {
      // SELECT * FROM users WHERE id = 1;
      const user = users.find(d => d.id === id)
      return Promise.resolve(user)
    },
  
    create({ name, weight }) {
      // INSERT INTO users (id, name, weight, adopter_id) VALUES ('xyz', 'Foo', 10, NULL);
      const newUser = { id: shortid.generate(), name, weight, adopter_id: null }
      users.push(newUser)
      return Promise.resolve(newUser)
    },
  
    update(id, changes) {
      // UPDATE users SET name = 'Foo', weight = 9, adopter_id = 'abc' WHERE id = 1;
      const user = users.find(user => user.id === id)
      if (!user) return Promise.resolve(null)
  
      const updatedUser = { ...changes, id }
      users = users.map(d => (d.id === id) ? updatedUser : d)
      return Promise.resolve(updatedUser)
    },
  
    delete(id) {
      // DELETE FROM users WHERE id = 1;
      const user = users.find(user => user.id === id)
      if (!user) return Promise.resolve(null)
  
      users = users.filter(d => d.id !== id)
      return Promise.resolve(user)
    }
  }
  
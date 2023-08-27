import { ROLES as roles } from './roles.js'
// roles[0] = student
// roles[1] = instructor
// roles[2] = admin
const users = [
    {
        id: 1,
        name: 'John Doe',
        username: 'user',
        password: '123',
        role: roles[0].code,
    },
    {
        id: 2,
        name: 'Jane Doe',
        username: 'instrctor',
        password: '123',
        role: roles[1].code,
    },
    {
        id: 3,
        name: 'Admin',
        username: 'admin',
        password: '123',
        role: roles[2].code,
    },
]

export {
    users
}
import { getById } from './utils.js'
import { users } from '../data/index.js'


const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const user = getById(users, id)
        res.status(200).json(user)
    }
    catch (error) {
        res.status(500).json(error)
    }
}
const getUsers = async (req, res) => {
    try {
        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

export {
    getUserById,
    getUsers
}

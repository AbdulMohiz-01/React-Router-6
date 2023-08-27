import { getById } from './utils.js'
import { ROLES } from '../data/roles.js'

const getRoleByCode = async (req, res) => {
    try {
        const code = req.params.code
        const role = getById(ROLES, code)
        res.status(200).json(role)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getRoles = async (req, res) => {
    try {
        res.status(200).json(ROLES)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

export {
    getRoleByCode,
    getRoles
}
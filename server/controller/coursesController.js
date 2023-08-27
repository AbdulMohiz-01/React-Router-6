import { courses } from "../data/index.js";
import { getById } from "./utils.js";

const getCourseById = async (req, res) => {
    try {
        const course = getById(courses, Number(req.params.id))
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getCourses = async (req, res) => {
    try {
        res.status(200).json(courses)
    }
    catch (error) {
        // Handle the error
        res.status(500).json(error)
    }
}

export {
    getCourseById,
    getCourses
}






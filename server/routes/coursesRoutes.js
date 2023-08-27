import { getCourseById, getCourses } from '../controller/coursesController.js';
import express from 'express';

const router = express.Router();

router.get('/courses', getCourses);
router.get('/courses/:id', getCourseById);


export { router };

const express = require('express');
const router = express.Router();
const { authProtect } = require('../middleware/authMiddleware.js');

const {
  getAllCourses,
  createCourse,
  getCourseById,
  getRelatedCourses,
  getCourseForInstructor,
} = require('../controllers/course.js');

router.get('/courses', authProtect, getAllCourses);
router.get('/courses/instructor', authProtect, getCourseForInstructor);
router.post('/create', authProtect, createCourse);
router.get('/detail/:courseId', authProtect, getCourseById);
router.get('/related-courses', authProtect, getRelatedCourses);

module.exports = router;

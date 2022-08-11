const express = require('express');
const router = express.Router();
const { authProtect } = require('../middleware/authMiddleware.js');

const {
  postReview,
  createCourse,
  getAllCourses,
  getCourseById,
  getRelatedCourses,
  getReviewsByCourse,
  getCourseForInstructor,
} = require('../controllers/course.js');

router.get('/courses', authProtect, getAllCourses);
router.get('/courses/instructor', authProtect, getCourseForInstructor);
router.post('/create', authProtect, createCourse);
router.get('/detail/:courseId', authProtect, getCourseById);
router.get('/related-courses', authProtect, getRelatedCourses);
router.post('/review', authProtect, postReview);
router.get('/get-reviews/:id', authProtect, getReviewsByCourse);

module.exports = router;

// const db = require('../models');
const { Op } = require('sequelize');
const asyncHandler = require('express-async-handler');
const { Course, Users, Review } = require('../models');

// Instructor
const createCourse = asyncHandler(async (req, res) => {
  const { id: userId, roleId } = req.user;
  const {
    title,
    slogan,
    learning_outcome,
    pre_req,
    description,
    features,
    price,
    category,
    video,
    language,
    duration,
    level,
  } = req.body;

  const titleExist = await Course.findOne({ where: { title } });

  if (roleId == 2) {
    res
      .status(400)
      .json({ message: "You don't have access to create the course" });
    throw new Error("You don't have access to create the course");
  } else {
    if (titleExist) {
      res.status(400).json({ message: 'Title for this course already exists' });
      throw new Error('Title for this course already exists');
    }

    const newCourse = await Course.create({
      title,
      slogan,
      learning_outcome,
      pre_req,
      description,
      features,
      price,
      category,
      video,
      language,
      duration,
      level,
      UserId: userId,
    });

    if (newCourse) {
      res.status(200).json(newCourse);
    } else {
      res.status(400).json({
        message: 'There is a problem while creating course. Please try again.',
      });
      throw new Error(
        'There is a problem while creating course. Please try again.'
      );
    }
  }
});

const getCourseForInstructor = asyncHandler(async (req, res) => {
  const { id: userId } = req?.query;

  const userExist = await Users.findOne({ where: { id: userId } });

  if (userExist) {
    if (userExist.roleId === 1) {
      const offeredCourses = await Course.findAll({
        where: { UserId: userId },
      });

      if (offeredCourses) {
        res.status(200).json(offeredCourses);
      } else {
        res.status(400).json({ message: 'You do not have courses to offer' });
        throw new Error('You do not have courses to offer');
      }
    } else {
      res.status(400).json({ message: "You can't have courses to offer" });
      throw new Error("You can't have courses to offer");
    }
  } else {
    res.status(400).json({ message: "User doesn't exist" });
    throw new Error("User doesn't exist");
  }
});

const postReview = asyncHandler(async (req, res) => {
  const { reviewText, courseId } = req.body;
  const { id: userId, roleId } = req.user;

  if (!reviewText || !courseId) {
    res
      .status(400)
      .json({ status: 'error', message: 'Please provide all fields' });
    throw new Error('Please provide all fields');
  }

  const courseFound = await Course.findOne({ where: { id: courseId } });

  if (courseFound) {
    const newReview = await Review.create({
      reviewText,
      username: req.user.username,
      CourseId: courseId,
    });

    res.status(200).json({ status: 'success', data: newReview });
  } else {
    res.status(400).json({
      status: 'error',
      message: 'Sorry! can not post review. Course not found',
    });
    throw new Error('Sorry! can not post review. Course not found');
  }
});

const getReviewsByCourse = asyncHandler(async (req, res) => {
  const { id: courseId } = req.params;

  const courseFound = await Course.findOne({ where: { id: courseId } });

  if (courseFound) {
    const getReviews = await Review.findAll({
      where: { CourseId: courseId },
    });

    res.status(200).json({ status: 'success', data: getReviews });
  } else {
    res.status(400).json({
      status: 'error',
      message: 'Course not found',
    });
    throw new Error('Course not found');
  }
});

// Public APIs
const getAllCourses = asyncHandler(async (req, res) => {
  const {
    search: bySearch,
    category: byCategory,
    title: byTitle,
    level: byLevel,
    language: byLanguage,
  } = req?.query;

  let getCourses;
  const filters = {};
  const orders = [];

  if (bySearch) filters.title = { [Op.like]: `%${bySearch}%` };
  if (byCategory) filters.category = byCategory;
  if (byLevel) filters.level = byLevel;
  if (byLanguage) filters.language = byLanguage;

  if (byTitle) orders.push(['title', byTitle]);

  if (!bySearch && !byCategory && !byTitle && !byLevel && !byLanguage) {
    getCourses = await Course.findAll();
  } else {
    getCourses = await Course.findAll({
      order: orders,
      where: filters,
    });
  }

  if (getCourses) {
    res.status(200).json(getCourses);
  } else {
    res.status(400);
    throw new Error('Something went wrong');
  }
});

const getCourseById = asyncHandler(async (req, res) => {
  const { courseId } = req.params;

  const course = await Course.findOne({ where: { id: courseId } });
  const instructor = await Users.findOne({ where: { id: course?.UserId } });

  if (instructor) {
    if (course) {
      res.status(200).json([
        {
          ...course.dataValues,
          instructor: `${instructor?.firstName} ${instructor?.lastName}`,
        },
      ]);
    } else {
      res
        .status(400)
        .json({ message: `No Course available with ID (${courseId})` });
      throw new Error(`No Course available with ID (${courseId})`);
    }
  }
});

const getRelatedCourses = asyncHandler(async (req, res) => {
  const { category, courseId } = req?.query;

  const courseExist = await Course.findOne({ where: { id: courseId } });

  if (courseExist) {
    const coursesByCategory = await Course.findAll({
      where: { category: category },
    });

    console.log(coursesByCategory);

    const filteredRelatedCourses = coursesByCategory.filter(
      (course) => course.id != courseId
    );

    if (filteredRelatedCourses.length > 0) {
      res.status(200).json(filteredRelatedCourses);
    } else {
      res.status(400).json({ message: 'No Related Courses' });
      throw new Error('No Related Courses');
    }
  } else {
    res
      .status(400)
      .json({ message: `Course not found with the ID (${courseId})` });
    throw new Error(`Course not found with the ID (${courseId})`);
  }
});

module.exports = {
  postReview,
  createCourse,
  getAllCourses,
  getCourseById,
  getRelatedCourses,
  getReviewsByCourse,
  getCourseForInstructor,
};

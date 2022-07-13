// const db = require('../models');
const { Op } = require('sequelize');
const asyncHandler = require('express-async-handler');
const { Course, Users } = require('../models');

// Instructor
const createCourse = asyncHandler(async (req, res) => {
  const { id: userId, roleId, username } = req.user;
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
      username,
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

// Public APIs
const getAllCourses = asyncHandler(async (req, res) => {
  const { search: bySearch, category: byCategory, title: byTitle } = req?.query;

  let getCourses;
  const filters = {};
  const orders = [];

  if (bySearch) filters.title = { [Op.like]: `%${bySearch}%` };
  if (byCategory) filters.category = byCategory;

  if (byTitle) orders.push(['title', byTitle]);

  if (!bySearch && !byCategory && !byTitle) {
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
    req.status(400);
    throw new Error('Something went wrong');
  }
});

const getCourseById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const course = await Course.findOne({ where: { id: id } });

  if (course) {
    res.status(200).json([course]);
  } else {
    res.status(400).json({ message: `No Course available with ID (${id})` });
    throw new Error(`No Course available with ID (${id})`);
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
  getAllCourses,
  createCourse,
  getCourseById,
  getRelatedCourses,
  getCourseForInstructor,
};

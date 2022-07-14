import { get, post } from 'utils/httpService';

export const createCourse = async (courseData) => {
  const response = await post(`/course/create`, courseData);
  return response;
};

export const instructorCourses = async (instructorId) => {
  const response = await get(`course/courses/instructor?id=${instructorId}`);
  return response;
};

export const courseById = async (courseId) => {
  const response = await get(`/course/detail/${courseId}`);
  return response;
};

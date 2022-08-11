import { Box } from '@mui/material';
import { UICourseCard } from 'components';
import React from 'react';

const Courses = ({ courses }) => {
  console.log(courses);
  return (
    <Box>
      {courses?.map((course) => (
        <UICourseCard
          key={course?.id}
          id={course?.id}
          title={course?.title}
          slogan={course?.slogan}
          category={course?.category}
          price={course?.price}
          isCoursesPage
        />
      ))}
    </Box>
  );
};

export default Courses;

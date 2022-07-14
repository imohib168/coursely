import * as yup from 'yup';

export const courseSchema = yup.object({
  title: yup.string().required('Title is required'),
  price: yup.number().required('Price is required'),
  slogan: yup.string().required('Slogan is required').max(250),
  category: yup.string().required('Category is required'),
  videoURL: yup.string().required('Video URL is required'),
  language: yup.string().required('Language is required'),
  duration: yup.string().required('Course duration/time is required'),

  description: yup
    .string()
    .required('Kindly provide detailed description about the course')
    .min(500),
  outcome: yup.string().required('What are the learning outcomes?').min(300),
  prereq: yup.string().required('What are prerequisites?').min(2).max(300),
  features: yup
    .string()
    .required('What are the features of this course?')
    .min(200),
});

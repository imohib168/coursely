import * as yup from 'yup';

export const courseSchema = yup.object({
  title: yup.string().required('Title is required'),
  price: yup.number().required('Price is required'),
  slogan: yup.string().required('Slogan is required').min(40).max(70),
  category: yup.string().required('Category is required'),
  videoURL: yup.string().required('Video URL is required'),

  description: yup
    .string()
    .required('Kindly provide detailed description about the course')
    .min(100)
    .max(4000),
  outcome: yup
    .string()
    .required('What are the learning outcomes?')
    .min(200)
    .max(500),
  prereq: yup.string().required('What are prerequisites?').min(150).max(300),
  features: yup
    .string()
    .required('What are the features of this course?')
    .min(200)
    .max(500),
});

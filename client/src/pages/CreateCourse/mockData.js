export const initialValues = {
  // Basic Details
  title: '',
  price: '',
  slogan: '',
  category: '',
  duration: '',
  language: '',
  level: '',
  // More Details
  description: '',
  outcome: '',
  prereq: '',
  features: '',
  videoURL: '',
};

export const courseCategories = [
  { value: 'SOFTWARE', label: 'IT & Software' },
  { value: 'DEVELOPMENT', label: 'Programming & Development' },
  { value: 'PHOTOGRAPHY', label: 'Photography' },
  { value: 'DESIGNING', label: 'Designing' },
  { value: 'BUSINESS', label: 'Business' },
  { value: 'MARKETING', label: 'Marketing' },
];

export const courseLevels = [
  { value: 'BEGINNER', label: 'Beginner' },
  { value: 'INTERMEDIATE', label: 'Intermediate' },
  { value: 'ADVANCED', label: 'Advanced' },
];

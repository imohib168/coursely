import * as yup from 'yup';

export const schema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  username: yup.string().required('username is required'),
  phone: yup
    .string()
    .matches(
      /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm,
      'Phone Number is not valid'
    )
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  role: yup
    .string()
    .required('Status is required')
    .uppercase('Wrong value (value passed must be uppercase)'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'password must be 8 characters long'),
  confirmPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password'), null], 'Password must match'),
});

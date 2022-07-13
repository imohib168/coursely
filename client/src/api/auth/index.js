import { post, put } from 'utils/httpService';

export const registerUser = async (userData) => {
  const response = await post('/user/register', userData);
  return response;
};

export const loginUser = async (userData) => {
  const response = await post('/user/login', userData);
  if (response) localStorage.setItem('user', JSON.stringify(response));
  return response;
};

export const updateProfile = async (updatedData) => {
  const response = await put('/user/update', updatedData);
  if (response) localStorage.setItem('user', JSON.stringify(response));
  return response;
};

import { post } from '../../utils/httpService';

export const registerUser = async (userData) => {
  const response = await post('/user/register', userData);
  if (response) localStorage.setItem('user', JSON.stringify(response));
  return response;
};

export const loginUser = async (userData) => {
  const response = await post('/user/login', userData);
  if (response) localStorage.setItem('user', JSON.stringify(response));
  return response;
};

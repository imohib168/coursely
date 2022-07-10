import { get, post, del } from '../../utils/httpService';

export const getCommentsByBlogId = async (blogId) => {
  const response = await get(`comment/comments/${blogId}`);
  return response;
};

export const postCommentOnBlog = async (commentData) => {
  const response = await post('/comment/add', commentData);
  return response;
};

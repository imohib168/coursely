import { get, post, del } from '../../utils/httpService';

export const getAllBlogs = async (id, search, title, category) => {
  console.log(id, search);
  const response =
    await get(`/blog/blogs?id=${id}&search=${search}&title=${title}&category=${category}
  `);
  return response;
};

export const createBlog = async (blogData) => {
  const response = await post('/blog/create-blog', blogData);
  return response;
};

export const getBlogById = async (id) => {
  const response = await get(`/blog/get-blog/${id}`);
  return response;
};

export const deleteBlog = async (id) => {
  const response = await del(`/blog/delete-blog/${id}`);
  return response;
};

export const getBlogCategories = async () => {
  const response = await get('blog/categories');
  return response;
};

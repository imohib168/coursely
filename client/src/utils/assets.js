import ErrorSVG from 'assets/svg/error-404.svg';
import RegisterSVG from 'assets/svg/register.svg';
import LoginSVG from 'assets/svg/login.svg';
import ExploreSVG from 'assets/svg/explore.svg';
import InstructorSVG from 'assets/svg/instructor.svg';
import StudentSVG from 'assets/svg/student.svg';
import BlogSVG from 'assets/svg/blog.svg';

import Logo from 'assets/images/coursely.png';
import Avatar from 'assets/images/avatar.png';

const ASSETS = {
  error: {
    img: ErrorSVG,
    alt: 'error-svg',
  },
  register: {
    img: RegisterSVG,
    alt: 'register-svg',
  },
  login: {
    img: LoginSVG,
    alt: 'login-svg',
  },
  logo: {
    img: Logo,
    alt: 'coursely-logo',
  },
  explore: {
    img: ExploreSVG,
    alt: 'explore-svg',
  },
  instructor: {
    img: InstructorSVG,
    alt: 'instructor-svg',
  },
  student: {
    img: StudentSVG,
    alt: 'student-svg',
  },
  blog: {
    img: BlogSVG,
    alt: 'blog-svg',
  },
  avatar: {
    img: Avatar,
    alt: 'user-avatar',
  },
};

export default ASSETS;

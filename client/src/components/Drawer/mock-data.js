import {
  AddOutlined,
  LibraryBooksOutlined,
  StackedBarChartOutlined,
  QuestionMarkOutlined,
} from '@mui/icons-material';

export const drawerMenuItems = [
  {
    id: 1,
    label: 'Create Course',
    Icon: AddOutlined,
    link: '/ins/course/create',
  },
  {
    id: 2,
    label: 'Courses',
    Icon: LibraryBooksOutlined,
    link: '/ins/course/all',
  },
  {
    id: 3,
    label: 'Course Stats',
    Icon: StackedBarChartOutlined,
    link: '/ins/course/stats',
  },
  {
    id: 4,
    label: 'Help',
    Icon: QuestionMarkOutlined,
    link: '/ins/course/help',
  },
];

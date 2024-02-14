import { json } from 'remix';
import HomePage from './HomePage';
import BlogList from './components/BlogList';

export default [
  {
    path: '/',
    component: HomePage,
    loader: () => json({}, { status: 200 }),
  },
  {
    path: '/posts/:postId',
    component: BlogList,
    loader: ({ params }) => json({ postId: params.postId }, { status: 200 }),
  },
];

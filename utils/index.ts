import { TBlogs } from '@/app/types';
import { compareDesc, parseISO } from 'date-fns';

export const sortBlogs = (blogs: TBlogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

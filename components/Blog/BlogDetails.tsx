import { TBlog } from '@/app/types';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { slug as githubSlug } from 'github-slugger';
import ViewCounter from './ViewCounter';

interface IProps {
  blog: TBlog;
  slug: string;
}

const BlogDetails = ({ blog, slug }: IProps) => {
  return (
    <div className="flex items-center px-10 gap-5 bg-accent text-light py-6 justify-around text-xl font-medium mx-10 rounded-lg">
      <time>{format(parseISO(blog.publishedAt), 'MMMM dd, yyyy')}</time>
      <span className="m-3">
        <ViewCounter />
      </span>
      <div>{blog.readingTime.text}</div>
      <Link href={`/categories/${githubSlug(blog.tags[0])}`}>
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;

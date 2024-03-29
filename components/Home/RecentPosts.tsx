import { TBlog } from '@/app/types';
import { sortBlogs } from '@/utils';
import React from 'react';
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';
import Link from 'next/link';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

interface IProps {
  blogs: Array<TBlog>;
}

const RecentPosts = ({ blogs }: IProps) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-10 sm:px-16 md:px-32 flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full">
        <h2 className="w-fit font-bold capitalize text-4xl">Recent Posts</h2>
        <Link
          href="/categories/all"
          className="inline-block dark:text-accentDark text-accent underline underline-offset-2 font-medium md:text-lg text-base"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(5, 11).map((blog, index) => {
          return (
            <article className="col-span-1 row-span-1 relative" key={index}>
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;

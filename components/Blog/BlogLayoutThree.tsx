import { TBlog } from '@/app/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBlog {
  blog: TBlog;
}

const BlogLayoutThree = ({ blog }: IBlog) => {
  return (
    <div className="flex flex-col gap-4 items-center text-dark group dark:text-light">
      <Link href={blog.url} className="h-full rounded-xl overflow-hidden">
        <Image
          src={blog.image.filePath.replace('../public', '')}
          alt={blog.title}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          width={blog.image.width}
          height={blog.image.height}
          className="w-full h-full object-cover object-center aspect-[4/3] group-hover:scale-105 transition-all ease duration-300"
        />
      </Link>
      <div className="flex flex-col mt-4 w-full h-auto">
        <span className="text-accent dark:text-accentDark uppercase font-semibold text-sm inline-block">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block">
          <h1 className="font-semibold dark:text-light text-xl capitalize text-dark mt-4">
            <span className="bg-gradient-to-r dark:from-accentDark/50 dark:to-accentDark/50 from-accent/50 to-accent/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-200">
              {blog.title}
            </span>
          </h1>
        </Link>
        <span className="text-base font-semibold dark:text-light/50 text-dark/50 capitalize inline-block">
          {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;

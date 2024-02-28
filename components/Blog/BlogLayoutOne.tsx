import { TBlog } from '@/app/types';
import Image from 'next/image';
import React from 'react';
import Tags from '../Elements/Tags';
import Link from 'next/link';
import { slug } from 'github-slugger';

interface IProps {
  blog: TBlog;
}
const BlogLayoutOne = ({ blog }: IProps) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl">
      <Link
        href={blog.url}
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
            "
      />
      <Image
        src={blog.image.filePath.replace('../public', '')}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        sizes="100%"
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
      />

      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        <Tags link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
        <Link href={blog.url} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;

import { TBlog } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

interface IProps {
  blog: TBlog;
}

const BlogLayoutTwo = ({ blog }: IProps) => {
  return (
    <div className="group grid grid-cols-12 items-center text-dark dark:text-light">
      <Link
        href={blog.url}
        className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace('../public', '')}
          alt={blog.title}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          width={blog.image.width}
          height={blog.image.height}
          className="w-full h-full object-cover object-center aspect-square group-hover:scale-105 transition-all ease duration-200"
        />
      </Link>
      <div className="col-span-12 lg:col-span-8 p-2 sm:p-4 md:p-10 w-full h-auto">
        <span className="text-accent uppercase font-semibold text-sm block dark:text-accentDark mt-3 sm:mt-0">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block">
          <h1 className="font-semibold text-xl capitalize text-dark mt-2 mb-2 lg:mt-4">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-200 dark:text-light">
              {blog.title}
            </span>
          </h1>
        </Link>
        <span className="text-base font-semibold text-dark/50 dark:text-light/50 capitalize inline-block">
          {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;

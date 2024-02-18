import { TBlog } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

interface IProps {
  blog: TBlog;
}

const BlogLayoutTwo = ({ blog }: IProps) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark">
      <Link
        href={blog.url}
        className="col-span-4 h-full rounded-xl overflow-hidden"
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
      <div className="col-span-8 p-10 w-full h-auto">
        <span className="text-accent uppercase font-semibold text-sm inline-block">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block">
          <h1 className="font-semibold text-xl capitalize text-dark mt-4">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-200">
              {blog.title}
            </span>
          </h1>
        </Link>
        <span className="text-base font-semibold text-dark/50 capitalize inline-block">
          {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;

import { TBlog } from '@/app/types';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { slug as githubSlug } from 'github-slugger';
import ViewCounter from './ViewCounter';

interface IProps {
  blog: TBlog;
  slug: string;
}

const BlogDetails = ({ blog, slug }: IProps) => {
  return (
    <div className="flex-col lg:flex lg:flex-row items-center px-3 md:px-10 gap-2  flex-wrap text-md md:gap-5 bg-accent dark:bg-accentDark dark:text-dark text-light py-6 justify-around text-sm sm:text-xl font-medium mx-2 md:mx-10 rounded-lg">
      <time>{format(parseISO(blog.publishedAt), 'MMMM dd, yyyy')}</time>
      <span>
        <ViewCounter slug={slug} />
      </span>
      <div>{blog.readingTime.text}</div>
      <Link href={`/categories/${githubSlug(blog.tags[0])}`}>
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;

import { TBlog } from '@/app/types';
import { sortBlogs } from '@/utils';
import Image from 'next/image';
import Tags from '../Elements/Tags';
import Link from 'next/link';
import { slug } from 'github-slugger';

interface IProps {
  blogs: Array<TBlog>;
}
[];
const HomeCoverSection = ({ blogs }: IProps) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  return (
    <div className="w-full">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 z-0 rounded-3xl" />
        <Image
          src={blog.image.filePath.replace('../public', '')}
          placeholder="blur"
          alt={blog.title}
          blurDataURL={blog.image.blurhashDataUrl}
          fill
          className="h-20 w-full object-center object-cover rounded-3xl -z-10"
          priority
        />

        <div className="w-full lg:w-3/4 p-4 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tags
            link={`/categories/${slug(blog.tags[0])}`}
            name={blog.tags[0]}
          />
          <Link href={blog.url} className="mt-6">
            <h1 className="font-bold text-xl md:text-3xl lg:text-4xl capitalize">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50 hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-200">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="hidden sm:inline-block mt-4 md:text-lg text-xl font-in">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;

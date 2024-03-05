'use client';
import { TBlog } from '@/app/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

interface IProps {
  blog: TBlog;
}
const mdxComponents = {
  Image,
};

const RenderMdx = ({ blog }: IProps) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div className="col-span-12 lg:col-span-8 prose max-w-max prose-slate prose-blockquote:bg-accent/20 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark prose-md sm:prose-lg md:prose-xl first-letter:text-3xl sm:first-letter:text-5xl">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;

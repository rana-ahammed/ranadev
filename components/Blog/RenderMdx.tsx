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
    <div className="col-span-8 prose prose-2xl max-w-max prose-slate prose-blockquote:bg-accent/20 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;

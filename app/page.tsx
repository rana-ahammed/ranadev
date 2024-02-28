import { allBlogs } from '@/.contentlayer/generated/index.mjs';
import FeaturedPosts from '@/components/Home/FeaturedPosts';
import HomeCoverSection from '@/components/Home/HomeCoverSection';
import RecentPosts from '@/components/Home/RecentPosts';
import { TBlog } from './types';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs as Array<TBlog>} />
      <FeaturedPosts blogs={allBlogs as Array<TBlog>} />
      <RecentPosts blogs={allBlogs as Array<TBlog>} />
    </main>
  );
}

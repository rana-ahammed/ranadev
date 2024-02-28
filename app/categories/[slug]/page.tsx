import { allBlogs } from '@/.contentlayer/generated/index.mjs';
import { TBlog } from '@/app/types';
import BlogLayoutThree from '@/components/Blog/BlogLayoutThree';
import Categories from '@/components/Blog/Categories';
import GithubSlugger, { slug } from 'github-slugger';

const slugger = new GithubSlugger();
export async function generateStaticParams() {
  let categories = [] as String[];
  const paths = [{ slug: 'all' }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const allCategories = ['all'];
  allBlogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });

  allCategories.sort();

  const blogs = allBlogs.filter((blog) => {
    if (params.slug === 'all') {
      return true;
    }
    return blog.tags.some((tag) => slug(tag) === params.slug);
  });
  return (
    <article>
      <div className="px-32 flex flex-col">
        <h1 className="text-5xl mt-6 font-semibold">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog as TBlog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;

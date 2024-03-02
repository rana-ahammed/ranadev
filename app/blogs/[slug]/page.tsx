import { allBlogs } from '@/.contentlayer/generated/index.mjs';
import { TBlog } from '@/app/types';
import BlogDetails from '@/components/Blog/BlogDetails';
import RenderMdx from '@/components/Blog/RenderMdx';
import Tags from '@/components/Elements/Tags';
import Image from 'next/image';
import { slug as githubSlug } from 'github-slugger';
import { siteMetaData } from '@/utils/siteMetaData';

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) return;

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const updatedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();
  let imageList: string[] | any = [siteMetaData.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === 'string'
        ? [siteMetaData.siteUrl + blog.image.filePath.replace('../public', '')]
        : [blog.image];
  }

  const ogImages = imageList.map((img: string) => {
    return { url: img.includes('http') ? img : siteMetaData.siteUrl + img };
  });
  const authors = blog?.author ? [blog.author] : [siteMetaData.author];

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetaData.siteUrl + blog.url,
      siteName: siteMetaData.title,
      locale: 'en_US',
      type: 'article',
      publishTime: publishedAt,
      modifiedTime: updatedAt,
      images: ogImages,
      authors: authors,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetaData.title,
      description: siteMetaData.description,
      images: ogImages, // Must be an absolute URL
    },
  };
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  console.log(blog);
  return (
    <article>
      <div className="w-full h-[70vh] mb-8 relative">
        <div className="w-full z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <Tags
            name={blog?.tags[0] as string}
            link={`/categories/${githubSlug(blog?.tags[0] as string)}`}
          />
          <h1 className="inline-block mt-6 font-semiblod capitalize text-light text-5xl leading-normal relative w-5/6 text-center">
            {blog?.title}
          </h1>
        </div>

        <div className="h-full absolute top-0 left-0 bottom-0 right-0 bg-dark/60 z-10" />
        {blog && (
          <Image
            src={blog.image.filePath.replace('../public', '')}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="w-full h-full object-center object-cover rounded-xl"
          />
        )}
      </div>

      <BlogDetails blog={blog as TBlog} slug={params.slug} />
      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">
          <details
            className="border-[1px] border-solid border-dark text-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pinter">
              Table of Content
            </summary>
            <ul className="mt-4 font-in text-base">
              {blog?.toc.map((heading, index) => {
                return (
                  <li key={index} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-6 flex items-center justify-start"
                    >
                      {heading.level === 'three' ? (
                        <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                          &nbsp;
                        </span>
                      ) : null}
                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <div className="col-span-8">
          <RenderMdx blog={blog as TBlog} />
        </div>
      </div>
    </article>
  );
}

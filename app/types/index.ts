export type TBlogs = {
  title: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  isPublished: boolean;
  author: string;
  tags: string[];
  body: {
    raw: string;
    html: string;
  };
  _id: string;
  _raw: {
    sourceFilePath: string;
    sourceFileName: string;
    sourceFileDir: string;
    contentType: string;
    flattenedPath: string;
  };
  type: string;
  url: string;
}[];

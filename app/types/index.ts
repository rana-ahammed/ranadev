export type TBlog = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  image: {
    filePath: string;
    relativeFilePath: string;
    format: string;
    height: number;
    width: number;
    aspectRatio: number;
    blurhashDataUrl: string;
  };
  isPublished: boolean;
  author: string;
  tags: string[];
  body: {
    raw: string;
    html: string;
    code: string;
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
  readingTime: { text: string; minutes: number; time: number; words: number };
  toc: [{ level: string; text: string; slug: string }];
};

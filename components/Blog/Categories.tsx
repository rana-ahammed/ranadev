import React from 'react';
import Category from './Category';
import { slug } from 'github-slugger';

interface IProps {
  categories: String[];
  currentSlug: String;
}

const Categories = ({ categories, currentSlug }: IProps) => {
  return (
    <div className="flex px-2 md:px-10 mt-10 border-t-2 border-b-2 border-solid border-dark dark:border-light py-1.5 sm:py-2 md:py-3 gap-3 justify-center items-start flex-wrap font-medium text-lg text-dark dark:text-light sm:text-xl lg:text-2xl mx-3 sm:mx-6 lg:mx-10">
      {categories.map((cat) => (
        <Category
          key={cat as string}
          link={`/categories/${cat}`}
          name={cat as string}
          active={currentSlug === slug(cat as string)}
        />
      ))}
    </div>
  );
};

export default Categories;

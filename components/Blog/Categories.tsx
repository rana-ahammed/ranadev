import React from 'react';
import Category from './Category';
import { slug } from 'github-slugger';

interface IProps {
  categories: String[];
  currentSlug: String;
}

const Categories = ({ categories, currentSlug }: IProps) => {
  return (
    <div className="flex px-10 mt-10 border-t-2 border-b-2 border-solid border-dark py-3 gap-3 justify-center items-start flex-wrap font-medium mx-10">
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

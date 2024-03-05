import Link from 'next/link';
import React from 'react';

interface IProps {
  link: string;
  active: boolean;
  name: string;
}

const Category = ({ link = '#', active, name }: IProps) => {
  return (
    <Link
      href={link}
      className={`py-3 px-10 border-2 border-solid rounded-full inline-block hover:scale-105 transition-all ease duration-200
        ${
          active
            ? 'bg-dark text-light border-light dark:bg-light dark:text-dark dark:border-dark'
            : 'bg-light text-dark border-dark dark:bg-dark dark:text-light dark:border-light'
        }`}
    >
      #{name}
    </Link>
  );
};

export default Category;

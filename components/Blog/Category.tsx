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
            ? 'bg-dark text-light border-light'
            : 'bg-light text-dark border-dark'
        }`}
    >
      #{name}
    </Link>
  );
};

export default Category;

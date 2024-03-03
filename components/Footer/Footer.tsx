'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import Link from 'next/link';
import { siteMetaData } from '@/utils/siteMetaData';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => console.log(data);
  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark m-3 md:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium text-center capitalize text-2xl md:text-4xl px-4">
        Interesting Stories |<br /> Updates |<br /> Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full lg:w-3/5 font-light text-sm sm:text-base dark:font-medium">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[320px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-2 sm:mx-4"
      >
        <input
          type="text"
          placeholder="Enter your email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pl-2 pb-1 dark:bg-dark dark:text-light"
        />

        <input
          type="submit"
          className="bg-dark dark:bg-light text-light dark:text-dark cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>

      <div className="flex text-xl gap-5 mt-8">
        <a href={siteMetaData.linkedin}>
          <FaLinkedin className="text-[#2A76B5] fill-light text-3xl hover:scale-125 transition-all ease duration-200 dark:fill-dark" />
        </a>
        <a href={siteMetaData.twitter}>
          <FaSquareXTwitter className="text-3xl hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href={siteMetaData.github}>
          <FaGithubSquare className="text-3xl hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href={siteMetaData.facebook}>
          <FaSquareFacebook className="text-3xl fill-light text-[#385598] hover:scale-125 transition-all ease duration-200 dark:fill-dark" />
        </a>
      </div>

      <div className="w-full mt-8 sm:mt-16 md:mt-24 font-medium border-t border-solid border-light py-6 px-8 flex flex-col  lg:flex lg:flex-row items-center justify-between">
        <span className="text-center">&copy; RanaDev All Rights Reserved</span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts;{' '}
          <a href="https://github.com/rana-ahammed" className="underline">
            RanaDev
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

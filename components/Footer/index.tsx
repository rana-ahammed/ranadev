'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => console.log(data);
  console.log(errors);
  return (
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 min-w-[320px] flex items-stretch bg-light p-2 rounded mx-4"
      >
        <input
          type="text"
          placeholder="Enter your email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pl-0 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>

      <div className="flex text-xl gap-5 mt-8">
        <a href="https://linkedin.com/in/rana-ahammed1">
          <FaLinkedin className="text-[#2A76B5] fill-light text-3xl hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="https://twitter.com/rana_ahammed_">
          <FaSquareXTwitter className="text-3xl hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="https://github.com/rana-ahammed">
          <FaGithubSquare className="text-3xl hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="https://facebook.com/rana-ahammed">
          <FaSquareFacebook className="text-3xl fill-light text-[#385598] hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full mt-24 font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between">
        <span className="text-center">&copy; RanaDev All Rights Reserved</span>
        <Link href="/sitemap.xml" className="text-center underline">
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

'use client';
import Link from 'next/link';
import Logo from './Logo';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { IoMoonSharp } from 'react-icons/io5';
import { FiSun } from 'react-icons/fi';
import siteMetaData from '@/utils/siteMetaData';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const toggle = () => {
    setClicked(!clicked);
  };

  return (
    <header className="w-full p-4 md:px-10 flex items-center justify-between mb-2">
      <Logo />
      <button className="h-auto lg:hidden z-50 mr-3 md:mr-6" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: clicked
                  ? 'rotate(-45deg) translateY(0)'
                  : 'rotate(0deg) translateY(6px)',
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{ opacity: clicked ? 0 : 1 }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: clicked
                  ? 'rotate(45deg) translateY(0)'
                  : 'rotate(0deg) translateY(-6px)',
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>
      <nav
        className="flex lg:hidden items-center w-max border border-solid border-dark rounded-full gap-2 py-2 px-4 sm:px-8 absolute top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm text-md font-medium z-50 ml-3 transition-all ease duration-300 dark:bg-light dark:text-dark"
        style={{ top: clicked ? '1.4rem' : '-5rem' }}
      >
        <Link href="/" className="hover:underline hover:text-cyan-500">
          Home
        </Link>
        <Link href="/about" className="hover:underline hover:text-cyan-500">
          About
        </Link>
        <Link href="/contact" className="hover:underline hover:text-cyan-500">
          Contact
        </Link>
        <button
          type="button"
          className="hover:!text-cyan-500"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <FiSun className="text-2xl" />
          ) : (
            <IoMoonSharp className="text-2xl" />
          )}
        </button>
      </nav>
      <nav className="hidden lg:flex items-center w-max border border-solid border-dark rounded-full gap-3 py-3 px-8 absolute top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm text-xl font-semibold z-50 dark:bg-light dark:text-dark">
        <Link href="/" className="hover:underline hover:text-cyan-500">
          Home
        </Link>
        <Link href="/about" className="hover:underline hover:text-cyan-500">
          About
        </Link>
        <Link href="/contact" className="hover:underline hover:text-cyan-500">
          Contact
        </Link>
        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <FiSun className="text-2xl" />
          ) : (
            <IoMoonSharp className="text-2xl" />
          )}
        </button>
      </nav>
      <div className="hidden lg:flex text-xl sm:gap-5 pr-6">
        <a href={siteMetaData.linkedin}>
          <FaLinkedin className="text-cyan-700 text-3xl hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a href={siteMetaData.twitter}>
          <FaSquareXTwitter className="text-3xl hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a href={siteMetaData.github}>
          <FaGithubSquare className="text-3xl hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a href={siteMetaData.facebook}>
          <FaSquareFacebook className="text-3xl text-blue-500 hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
      </div>
    </header>
  );
};

export default Header;

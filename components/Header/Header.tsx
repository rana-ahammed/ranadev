import Link from 'next/link';
import Logo from './Logo';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { IoMoonSharp } from 'react-icons/io5';
import { FiSun } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="flex items-center w-max border border-solid border-dark rounded-full gap-3 py-3 px-8 fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm text-xl font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button type="button">
          <FiSun className="text-2xl" />
        </button>
      </nav>
      <div className="flex text-xl gap-5">
        <a href="https://linkedin.com/in/rana-ahammed1">
          <FaLinkedin className="text-cyan-700 text-3xl hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="https://twitter.com/rana_ahammed_">
          <FaSquareXTwitter className="text-3xl hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="https://github.com/rana-ahammed">
          <FaGithubSquare className="text-3xl hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="https://facebook.com/rana-ahammed">
          <FaSquareFacebook className="text-3xl text-blue-500 hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;

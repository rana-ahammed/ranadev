import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-dark gap-3 dark:text-light"
    >
      <div>
        <Image
          src={logo}
          alt="Logo"
          className="w-12 h-12 rounded-full dark:border-light dark:border-2 dark:border-solid"
        />
      </div>
      <span className="font-bold dark:font-semibold text-2xl">RanaDev</span>
    </Link>
  );
};

export default Logo;

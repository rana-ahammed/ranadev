import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark gap-3">
      <div>
        <Image src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
      </div>
      <span className="font-bold text-2xl">RanaDev</span>
    </Link>
  );
};

export default Logo;

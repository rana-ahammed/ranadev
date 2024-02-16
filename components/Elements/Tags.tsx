import Link from 'next/link';

type Ttags = {
  link: string;
  name: string;
};

const Tags = ({ link = '#', name }: Ttags) => {
  return (
    <Link
      className="inline-block py-3 px-10 bg-dark text-light rounded-full border-2 border-solid border-light capitalize font-semibold hover:scale-105 transition-all ease duration-200"
      href={link}
    >
      {name}
    </Link>
  );
};

export default Tags;

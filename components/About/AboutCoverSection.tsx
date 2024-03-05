import Image from 'next/image';
import React from 'react';
import profile from '@/public/profile.jpg';

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid dark:border-light border-dark flex flex-col md:flex-row items-center justify-center text-dark dark:text-light/80">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light/80 flex justify-center">
        <Image
          src={profile}
          alt="RanaDev"
          className="w-full h-full object-contain object-center p-6"
          sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 50vw"
          priority
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col text-left items-center md:items-start justify-center px-6 md:px-8 lg:px-16 pb-4 md:pb-0">
        <h2 className="font-bold capitalize text-center text-2xl md:text-4xl lg:text-6xl">
          Dream Big, Work Hard, Acheive More!
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          molestiae necessitatibus obcaecati nisi quo illo mollitia soluta iure
          dolorum? Id laborum voluptatem quos sit tempore quam, nulla hic error
          ab odit praesentium. Odio, aliquid? In voluptatem quaerat voluptates
          minima cumque quisquam voluptate facere incidunt cupiditate. Quis iste
          voluptatibus numquam aut.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;

import Image from 'next/image';
import React from 'react';
import profile from '@/public/profile.jpg';

const AboutCoverSection = () => {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="w-1/2 h-full border-r-2 border-solid border-dark flex justify-center">
        <Image
          src={profile}
          alt="RanaDev"
          className="w-full h-full object-contain object-center p-6"
        />
      </div>
      <div className="w-1/2 flex flex-col text-left items-start justify-center px-16">
        <h2 className="font-bold capitalize text-6xl">
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

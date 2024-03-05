const SkillList = [
  'next.js',
  'tailwind css',
  'figma',
  'javascript',
  'web design',
  'typescript',
  'seo',
  'nodejs',
  'expressjs',
  'mongodb',
  'contentlayer',
  'mongoose',
  'prisma',
  'react',
];
const Skills = () => {
  return (
    <section className="w-full flex flex-col p-5 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark text-dark dark:border-light/80 dark:text-light/80 ">
      <span className="font-semibold text-xl sm:text-2xl lg:text-4xl text-accent dark:text-accentDark">
        I am comfortable in...
      </span>
      <ul className="flex flex-wrap mt-8 justify-center md:justify-start">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize text-lg md:text-2xl py-3 px-5 md:py-5 md:px-12 border-2 border-solid border-dark dark:border-light rounded mr-3 mb-3 md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;

'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base sm:text-lg md:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{' '}
      <input
        type="text"
        placeholder="Your Name"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      and I want to discuss a potential project. You can email me at
      <input
        type="email"
        placeholder="Your Email"
        {...register('Email', {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="Your Phone"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      Here are some details about my project: <br />
      <textarea
        {...register('Project Details', {})}
        placeholder="My Project is About..."
        rows={3}
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        value="Send Request"
        className="font-medium text-lg sm:text-xl mt-8 inline-block capitalize py-2 sm:py-3 px-2 sm:px-8 border-2 border-solid text-dark border-dark dark:border-light dark:text-light rounded cursor-pointer"
      />
    </form>
  );
}

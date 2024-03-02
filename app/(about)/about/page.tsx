import { Metadata } from 'next';
import AboutCoverSection from '@/components/About/AboutCoverSection';
import Skills from '@/components/About/Skills';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Here are some details about myself',
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark">
        Have a project in mind? Reach out to me from{' '}
        <Link href="/contact" className="!underline text-blue-400">
          here
        </Link>{' '}
        and let&apos;s make it happen.
      </h2>
    </>
  );
}

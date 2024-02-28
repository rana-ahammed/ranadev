import ContactForm from '@/components/Contact/ContactForm';
import LottieAnimation from '@/components/Contact/LottieAnimation';

export default function Contact() {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center">
      <div className="w-2/5 h-full inline-block border-r-2 border-solid border-dark">
        <LottieAnimation />
      </div>
      <div className="w-3/6 flex flex-col items-start justify-center px-16 pb-8">
        <h2 className="font-bold capitalize text-4xl">Let&apos;s Connect!</h2>
        <ContactForm />
      </div>
    </section>
  );
}

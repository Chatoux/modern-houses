import Header from '@/app/components/Header';
import '@/app/styles/globals.css';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className='p-10'>
        <h1 className='text-4xl font-bold mb-6'>About Us</h1>
        <p className='mb-4'>Modern Houses is dedicated to creating beautiful and sustainable homes...</p>
        <img src='/about-us.jpg' alt='About Us' className='w-full h-64 object-cover mt-4' />
      </main>
    </>
  );
}
import Header from '@/app/components/Header';
import Image from 'next/image';
import '@/app/styles/globals.css';

export default function HomePage() {
  return (
    <>
      <Header />
      <section className='h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/hero-house.jpg)' }}>
        <div className='bg-black bg-opacity-50 h-full flex items-center justify-center'>
          <div className='text-center text-white p-5'>
            <h1 className='text-5xl font-bold'>Welcome to Modern Houses</h1>
            <p className='mt-4 text-lg'>Discover our modern designs and sustainable living solutions</p>
            <button className='mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded'>Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
}
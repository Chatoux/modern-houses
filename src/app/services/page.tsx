import Header from '@/app/components/Header';
import '@/app/styles/globals.css';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className='p-10'>
        <h1 className='text-4xl font-bold mb-6'>Our Services</h1>
        <p className='mb-4'>We offer a range of services to cater to your home building needs...</p>
        <img src='/services-home.jpg' alt='Our Services' className='w-full h-64 object-cover mt-4' />
      </main>
    </>
  );
}
import Header from '@/app/components/Header';
import '@/app/styles/globals.css';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className='p-10'>
        <h1 className='text-4xl font-bold mb-6'>Contact Us</h1>
        <form className='space-y-4'>
          <div>
            <label className='block mb-2'>Name</label>
            <input type='text' className='border p-2 w-full' required />
          </div>
          <div>
            <label className='block mb-2'>Email</label>
            <input type='email' className='border p-2 w-full' required />
          </div>
          <div>
            <label className='block mb-2'>Message</label>
            <textarea className='border p-2 w-full' rows={4} required></textarea>
          </div>
          <button type='submit' className='px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white'>Submit</button>
        </form>
      </main>
    </>
  );
}
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Modern Houses</h1>
        <nav className='space-x-4'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/services'>Services</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
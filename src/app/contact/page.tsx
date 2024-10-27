// app/about/page.tsx
import Link from 'next/link';
import '../assets/frontend/css/style.css';

export default function Contact() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Contact Us</h1>
        <p>Ini adalah halaman tentang kami.</p>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/dashboard">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
  
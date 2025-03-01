// components/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 bg-blue-500 text-white">
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

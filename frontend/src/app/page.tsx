// app/page.tsx

import Header from '@/components/Header';
import FetchMessage from '@/components/FetchMessage';

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Welcome to Next.js!</h1>
      <p>Your app is now up and running.</p>
      <FetchMessage />
    </main>
  );
}

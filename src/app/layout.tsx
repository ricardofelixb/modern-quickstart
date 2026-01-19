import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { withAuth, getSignInUrl } from '@workos-inc/authkit-nextjs';

import './globals.css';
import { Providers } from './components/providers';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'App Title',
  description: 'Your app description',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
            <Header user={user} signInUrl={signInUrl} />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Menu } from '@base-ui/react/menu';

interface HeaderProps {
  user: { firstName?: string | null; profilePictureUrl?: string | null } | null;
  signInUrl: string;
}

const emptySubscribe = () => () => {};

function ThemeToggle() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggle}
      className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
      aria-label="Toggle theme"
    >
      {!mounted ? (
        <div className="w-[18px] h-[18px]" />
      ) : resolvedTheme === 'dark' ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}

export function Header({ user, signInUrl }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800/50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl px-4 sm:px-8 lg:px-12">
      <div className="flex items-center justify-end h-14">
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {user ? (
            <Menu.Root>
              <Menu.Trigger className="cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400">
                {user.profilePictureUrl ? (
                  <Image
                    src={user.profilePictureUrl}
                    alt=""
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    {user.firstName?.[0] || 'U'}
                  </div>
                )}
              </Menu.Trigger>
              <Menu.Portal>
                <Menu.Positioner sideOffset={8} align="end" className="z-[100]">
                  <Menu.Popup className="min-w-[140px] rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-1 shadow-lg">
                    <Menu.Item
                      className="flex items-center px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 rounded-md cursor-pointer outline-none data-[highlighted]:bg-neutral-100 dark:data-[highlighted]:bg-neutral-800"
                      onClick={() => {
                        const form = document.createElement('form');
                        form.method = 'POST';
                        form.action = '/api/auth/signout';
                        document.body.appendChild(form);
                        form.submit();
                      }}
                    >
                      Sign Out
                    </Menu.Item>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.Root>
          ) : (
            <Link
              href={signInUrl}
              className="h-8 px-4 text-sm font-medium rounded-md inline-flex items-center border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

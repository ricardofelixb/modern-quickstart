import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800/50 py-4 px-4 sm:px-8 lg:px-12">
      <div className="flex items-center justify-between text-xs text-neutral-500">
        <span>
          {' '}
          <Link
            href="https://convex.dev"
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            target="_blank"
          >
            Convex
          </Link>
          {' + '}
          <Link
            href="https://workos.com"
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            target="_blank"
          >
            WorkOS
          </Link>
          {' + '}
          <Link
            href="https://stripe.com"
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            target="_blank"
          >
            Stripe
          </Link>
          {' + '}
          <Link
            href="https://base-ui.com"
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            target="_blank"
          >
            Base UI
          </Link>
        </span>
        <Link
          href="https://github.com"
          className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}

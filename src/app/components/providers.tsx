'use client';

import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { ThemeProvider } from 'next-themes';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithAuth } from 'convex/react';
import {
  AuthKitProvider,
  useAuth,
  useAccessToken,
} from '@workos-inc/authkit-nextjs/components';
import NextTopLoader from 'nextjs-toploader';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

function useAuthFromAuthKit(): {
  isLoading: boolean;
  isAuthenticated: boolean;
  fetchAccessToken: () => Promise<string | null>;
} {
  const { user, loading: isLoading } = useAuth();
  const {
    accessToken,
    loading: tokenLoading,
    error: tokenError,
  } = useAccessToken();
  const loading = (isLoading ?? false) || (tokenLoading ?? false);
  const authenticated = !!user && !!accessToken && !loading;

  const stableAccessToken = useRef<string | null>(null);

  useEffect(() => {
    if (accessToken && !tokenError) {
      stableAccessToken.current = accessToken;
    }
  }, [accessToken, tokenError]);

  const fetchAccessToken = useCallback(async () => {
    if (stableAccessToken.current && !tokenError) {
      return stableAccessToken.current;
    }
    return null;
  }, [tokenError]);

  return {
    isLoading: loading,
    isAuthenticated: authenticated,
    fetchAccessToken,
  };
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthKitProvider>
        <ConvexProviderWithAuth client={convex} useAuth={useAuthFromAuthKit}>
          <NextTopLoader color="#3b82f6" showSpinner={false} />
          {children}
        </ConvexProviderWithAuth>
      </AuthKitProvider>
    </ThemeProvider>
  );
}

import { Navbar } from "@components/common/header/Navbar";
import { ThemeProvider } from "@lib/context/ThemeContext";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider>
      <main className={`min-w-screen min-h-screen`}>
        {!router.pathname.includes("/auth") ? <Navbar /> : null}
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}
        >
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </SessionContextProvider>
      </main>
    </ThemeProvider>
  );
}

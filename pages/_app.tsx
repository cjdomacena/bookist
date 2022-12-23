import { ThemeProvider } from "@lib/context/ThemeContext";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import type { AppProps } from "next/app";
import { useState } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <ThemeProvider>
      <main className={`min-w-screen min-h-screen transition-colors`}>
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}
        >
          <Component {...pageProps} />
        </SessionContextProvider>
      </main>
    </ThemeProvider>
  );
}

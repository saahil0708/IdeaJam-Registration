import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { initLenis } from "@/lib/Lenis";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = initLenis();

    return () => {
      lenis.destroy();
    };
  }, []);

  return <Component {...pageProps} />;
}

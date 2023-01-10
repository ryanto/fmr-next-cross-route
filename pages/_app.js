import Head from "next/head";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Route animations</title>
      </Head>
      <div className={`${inter.className} min-h-[2000px]`}>
        <AnimatePresence initial={false} mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  );
}

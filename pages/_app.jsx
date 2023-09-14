import "~/styles/globals.css";
import { Lato } from "next/font/google";
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={` ${lato.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

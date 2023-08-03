import { Noto_Sans } from "next/font/google";
import DefaultLayout from "@/layouts";
import "@/styles/globals.scss";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={notoSans.className}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </main>
  );
}

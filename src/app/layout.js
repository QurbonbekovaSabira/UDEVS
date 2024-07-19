import { Manrope } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const inter = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between h-[100vh]">
          <div>
            <Header />
            <div className="bg-[url(/img/body-bg.jpg)]">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Providers from "@/app/Providers";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MOVIE APP",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col justify-between w-full min-h-screen">
            <Header />
            <Navbar />
            <main className="flex flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/HeaderFooter/Header";
import Footer from "@/components/HeaderFooter/Footer";
import NextTopLoader from "nextjs-toploader";
import FloatingButton from "@/components/FloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MCM Phoenix",
  description: "Muslim Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} color="#00BDA5" />
        <Header />
        <FloatingButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}

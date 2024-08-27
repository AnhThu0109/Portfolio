import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "A portflio by Nguyen Ngoc Anh Thu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Nav from '@/components/Nav';
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "AL Market Home",
  description: "Invest and save with AL Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased w-screen`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}

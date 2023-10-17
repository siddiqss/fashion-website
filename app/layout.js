import { europaGrotesk } from "@/components/CoverVideo";
import "./globals.css";
import { Sirin_Stencil } from "next/font/google";

export const sirinStencil = Sirin_Stencil({ subsets: ["latin"], weight: "400" });

const metadata = {
  title: "Chicity-Fashion Brand",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={europaGrotesk.className}>
        {children}
      </body>
    </html>
  );
}

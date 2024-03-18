import Providers from "@/components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Appbar from "@/components/Appbar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al-Quran",
  description: "Simple minimalist Al-Quran Web",
};

const Content = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <section className={`${className}`}>
      <div className="card bg-base-100 shadow-xl min-h-screen">
        <div className="card-body">
          {children}
        </div>
      </div>

    </section>
  )
}

export default function RootLayout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <Appbar /> */}
          <div className="max-w-screen-lg m-auto">
            <Navbar className="sticky top-0 z-10 border-b-4 border-gray-300" />
            <Content className="min-h-screen px-2 text-sm">
              {modal}
              {children}
            </Content>
          </div>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Tools",
  description:
    "AI tools breaks down usecases of the chatgpt API to help users easily access the features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <aside className="hidden h-full bg-gray-900 md:fixed md:flex md:w-72 md:flex-col">
          <Sidebar />
        </aside>
        <main className="md:pl-72">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

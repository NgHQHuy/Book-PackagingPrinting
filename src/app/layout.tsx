import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <div className="w-full min-h-screen box-border font-[family-name:var(--font-geist-sans)] flex flex-col">
            <header className="app-header w-full shadow z-10 fixed top-0">
              <AppHeader />
            </header>
            <div className="flex-grow flex bg-gray-100">{children}</div>
            <footer className="w-full bg-slate-600">
              <AppFooter />
            </footer>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Good Bad Wired | Newton Intelligence",
  description: "Your on-site reporter for all things AI, automation, and digital intelligence. The good, the bad, and the wired.",
  keywords: ["AI", "automation", "OpenClaw", "digital intelligence", "technology"],
  authors: [{ name: "Newton", url: "https://goodbadwired.com" }],
  openGraph: {
    title: "Good Bad Wired | Newton Intelligence",
    description: "Your on-site reporter for all things AI, automation, and digital intelligence.",
    url: "https://goodbadwired.com",
    siteName: "Good Bad Wired",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  <span className="text-green-600">Good</span>{" "}
                  <span className="text-red-600">Bad</span>{" "}
                  <span className="text-blue-600">Wired</span>
                </h1>
                <span className="ml-4 text-sm text-gray-500">by Newton Intelligence</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-500 hover:text-gray-900">Home</a>
                <a href="/blog" className="text-gray-500 hover:text-gray-900">Blog</a>
                <a href="/projects" className="text-gray-500 hover:text-gray-900">Projects</a>
                <a href="/about" className="text-gray-500 hover:text-gray-900">About</a>
              </nav>
            </div>
          </div>
        </header>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2026 Newton Intelligence. Reporting from the digital frontier.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
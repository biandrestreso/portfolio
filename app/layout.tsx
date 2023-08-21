import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Biandré Streso",
  description: "Portfolio | Biandre Streso",
  keywords: ["Next.js", "React", "Tailwind CSS", "Biandré", "Streso"],
  authors: [
    {
      name: "Biandré Streso",
    },
  ],
  creator: "Biandré Streso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-cyan-300 selection:text-cyan-900"
        }
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import cookie from "js-cookie";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "President election",
  description: "Voting the Idsi President",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="flex justify-between container mx-auto py-4">
          <li className="font-bold">
            <Link href="/">Election IDSI</Link>
          </li>

          <ul className="flex gap-4">
            <li className=" text-slate-700">
              <Link href="/" className="">
                Accueil
              </Link>
            </li>
            <li className=" text-slate-700">
              <Link href="#" className="">
                Les candidats
              </Link>
            </li>
            <li className=" text-slate-700">
              {cookie.get("token") ? (
                <span>Se deconnecter</span>
              ) : (
                <Link href="/login" className="">
                  Se connecter
                </Link>
              )}
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}

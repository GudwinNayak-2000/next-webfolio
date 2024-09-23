import "./globals.css";
import { rubik } from "./fonts";
import Providers from "@/providers";
import clsx from "clsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx('dark:bg-dark', 'min-h-screen', rubik.className)} >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
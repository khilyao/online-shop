import type { Metadata } from "next";
import { Roboto, Judson } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const judson = Judson({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(roboto.className, judson.className)}>{children}</body>
    </html>
  );
}

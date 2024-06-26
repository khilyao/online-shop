import type { Metadata } from "next";
import { Roboto, Judson, Open_Sans } from "next/font/google";
import "./globals.scss";
import StoreProvider from "@context/storeContext";
import localFont from "next/font/local";

// const myFont = localFont({ src: "./my-font.woff2" });

const judson = Judson({
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
});

const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["cyrillic"],
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
      <body
        className={`${judson.className} ${roboto.className} ${openSans.className}`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chuck and Buck Rewind",
  description: "Easily listen to the latest episode of Chuck and Buck.",
  metadataBase: new URL("https://chuckandbuckrewind.com"),
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
      <body className={`${inter.className} bg-slate-900`}>{children}</body>
    </html>
  );
}

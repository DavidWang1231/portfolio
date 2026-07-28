import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://davidwang1231.github.io"),
  title: "Jiacheng Wang — Electrical Engineering Portfolio",
  description:
    "Electrical engineering, hardware, embedded systems and robotics work by Jiacheng Wang.",
  openGraph: {
    title: "Jiacheng Wang — Electrical Engineering",
    description:
      "Hardware, embedded systems, robotics and engineering software.",
    type: "website",
    images: [{ url: "/og.png", width: 1733, height: 907 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiacheng Wang — Electrical Engineering",
    description:
      "Hardware, embedded systems, robotics and engineering software.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

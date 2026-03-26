import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivani Sirisilla — AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Shivani Sirisilla — CS student at SVIT, specializing in AI, Data Science, and full-stack development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

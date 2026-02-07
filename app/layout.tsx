import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Abu Talha Lafi - Portfolio",
  description: "Computer Science Student | Tech Content Writer | Educational Resource Curator - Portfolio showcasing projects, skills, and experience.",
  keywords: ["Md Abu Talha Lafi", "Computer Science", "Portfolio", "Tech Writer", "Python", "Data Visualization"],
  authors: [{ name: "Md Abu Talha Lafi" }],
  openGraph: {
    title: "Md Abu Talha Lafi - Portfolio",
    description: "Computer Science Student | Tech Content Writer | Educational Resource Curator",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

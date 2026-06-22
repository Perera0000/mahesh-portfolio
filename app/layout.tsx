import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahesh Perera | Software Engineering Intern & Full-Stack Developer",
  description: "Portfolio of Mahesh Perera, a high-potential Software Engineering Intern, Full-Stack Developer, and information systems student at Rajarata University. Showcasing expert-level projects, certifications, leadership, and hackathon achievements.",
  keywords: [
    "Mahesh Perera",
    "Software Engineer",
    "Software Engineering Intern",
    "Full-Stack Developer",
    "Rajarata University",
    "Next.js Developer",
    "Web Developer Portfolio"
  ],
  authors: [{ name: "Mahesh Perera" }],
  creator: "Mahesh Perera",
  openGraph: {
    title: "Mahesh Perera | Software Engineering Intern & Full-Stack Developer",
    description: "Professional software engineering portfolio showcasing academic achievements, full-stack projects, and leadership roles.",
    url: "https://mahesh-perera.vercel.app",
    siteName: "Mahesh Perera Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesh Perera | Software Engineering Intern & Full-Stack Developer",
    description: "Professional software engineering portfolio showcasing academic achievements, full-stack projects, and leadership roles.",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased bg-background text-text-primary min-h-screen"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

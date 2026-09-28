import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaysotech.com.ng"),
  title: "Kaysotech | Web Development, Mobile Apps & Software Solutions",
  description:
    "Kaysotech is a software development company specializing in custom websites, mobile apps, e-commerce solutions, and business automation, with hands-on training and mentorship.",
  keywords:
    "web development company, app development, software development, e-commerce solutions, business automation, web design, tech training, mentorship",
  authors: [{ name: "Kaysotech" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kaysotech | Web & Software Development Company",
    description:
      "Custom websites, mobile apps, e-commerce solutions and business automation for startups and businesses.",
    type: "website",
    url: "/",
    images: ["/assets/img/kaysotech.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kaysotech",
    title: "Kaysotech | Web & Software Development Company",
    description:
      "Custom websites, mobile apps, e-commerce solutions and business automation for startups and businesses.",
    images: ["/assets/img/kaysotech.png"],
  },
  icons: { icon: "/assets/img/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/glightbox/css/glightbox.min.css"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

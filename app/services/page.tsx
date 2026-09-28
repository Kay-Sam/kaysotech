import type { Metadata } from "next";
import ServicesMarkup from "../../components/ServicesMarkup";
import SiteScripts from "../../components/SiteScripts";

export const metadata: Metadata = {
  title: "Services | Kaysotech Web Development & Software Services in Nigeria",
  description:
    "Explore Kaysotech services including web development, custom software, e-commerce solutions and tech mentorship.",
  keywords:
    "web development, ecommerce website, custom software, tech mentorship, website design, web development Nigeria, app development Nigeria",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Kaysotech Services | Web & Software Development in Nigeria",
    description:
      "Professional web development, mobile apps, e-commerce and business automation services.",
    type: "website",
    url: "/services",
    images: ["/assets/img/kaysotech flyer.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesMarkup />
      <SiteScripts />
    </>
  );
}

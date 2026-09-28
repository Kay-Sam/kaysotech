import HomeMarkup from "../components/HomeMarkup";
import SiteScripts from "../components/SiteScripts";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kaysotech",
  url: "https://kaysotech.com.ng",
  logo: "https://kaysotech.com.ng/logo.png",
  sameAs: [
    "https://instagram.com/kaysotech",
    "https://linkedin.com/company/kaysotech",
    "https://www.facebook.com/profile.php?id=61588617735888",
  ],
};

export default function HomePage() {
  return (
    <>
      <HomeMarkup />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <SiteScripts homePage />
    </>
  );
}

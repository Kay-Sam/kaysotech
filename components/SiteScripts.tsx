"use client";

import Script from "next/script";
import { useEffect } from "react";

type AosWindow = Window & {
  AOS?: {
    init: (options: {
      duration: number;
      easing: string;
      once: boolean;
      mirror: boolean;
    }) => void;
  };
};

function initializeAOS() {
  (window as AosWindow).AOS?.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}

export default function SiteScripts({
  homePage = false,
}: {
  homePage?: boolean;
}) {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".copyright").forEach((element) => {
      element.innerHTML = element.innerHTML.replace(
        "Copyright  <strong>",
        `Copyright ${new Date().getFullYear()} <strong>`,
      );
    });

    const form = document.getElementById("whatsapp-form");
    if (!(form instanceof HTMLFormElement)) return;

    const getValue = (id: string) =>
      form
        .querySelector<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >(`#${id}`)
        ?.value.trim() ?? "";

    const handleSubmit = (event: SubmitEvent) => {
      event.preventDefault();

      const whatsappMessage = `Hello Kaysotech Team 👋

*New Project Request*

*Name:* ${getValue("name")}
*Email:* ${getValue("email")}

*Project Type:* ${getValue("project_type")}
*Development Type:* ${getValue("development_type")}

*Budget:* ${getValue("budget")}
*Timeline:* ${getValue("timeline")}

*Project Details:*
${getValue("message")}`;

      window.location.assign(
        `https://wa.me/2347053088651?text=${encodeURIComponent(whatsappMessage)}`,
      );
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return (
    <>
      <Script
        src="/assets/vendor/aos/aos.js"
        strategy="afterInteractive"
        onReady={initializeAOS}
      />
      {homePage && (
        <>
          <Script
            src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
            strategy="afterInteractive"
          />
          <Script
            src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"
            strategy="afterInteractive"
          />
          <Script
            src="/assets/vendor/glightbox/js/glightbox.min.js"
            strategy="afterInteractive"
          />
        </>
      )}
      <Script
        src="/assets/js/main.js?v=nextjs-fix-1"
        strategy="afterInteractive"
      />
    </>
  );
}

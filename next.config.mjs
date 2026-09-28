/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hide the Next.js dev-tools indicator (the floating "N" badge shown at the
  // bottom-left of the page in development). It is a dev-only overlay and is
  // never part of a production build, but this disables it locally too.
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;

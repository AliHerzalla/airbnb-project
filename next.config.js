/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.papareact.com", "a0.muscache.com"],
  },
  env: {
    REACT_APP_MAPBOX_ACCESS_TOKEN: "pk.eyJ1IjoiYWxpLXRlc3QtbWFwYm94IiwiYSI6ImNsZHN6d25tajIyYXY0MG14Mm51a2NwcDgifQ.GWB2Nx-ijIHyx2YEf47bJA"
  }
};

module.exports = nextConfig;

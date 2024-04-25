/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "_next",
  env: {
    gAnalytics: "G-ST8NVP3CPM",
    appDomain: "https://persatu.one",
    apiDomain: "https://zulkarna.in/persatuone_api",
  },
};

module.exports = nextConfig;

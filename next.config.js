/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "default",
    domains: ["localhost", "res.cloudinary.com", "boiling-reaches-68177.herokuapp.com"],
  },
}

module.exports = nextConfig

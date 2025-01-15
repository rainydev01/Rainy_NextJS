/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Existing Redirections
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rainyfilters.com',
          },
        ],
        destination: 'https://www.rainyfilters.com/:path*', 
        permanent: true, // Permanent redirect (301)
      },
      { source: '/gallery', destination: '/Gallery/gallery', permanent: true },
      { source: '/about-us/blogs/rain-water-', destination: '/about-us/blogs', permanent: true },
      { source: '/contact-us/videoGallery', destination: '/Gallery/videoGallery', permanent: true },
      { source: '/about-us/blogs/rain-water-harve', destination: '/about-us/blogs', permanent: true },
      { source: '/Rainyfilters', destination: '/products/rainy-filters', permanent: true },
      { source: '/about-us/rainy-rainwater-harvesting-filters', destination: '/about-us/our-journey', permanent: true },
      { source: '/contact-us/dealers', destination: '/contact-us/enquire', permanent: true },
      { source: '/inftrees', destination: '/products/rainy-filters', permanent: true },
      { source: '/zlib/inflate', destination: '/products/rainy-filters', permanent: true },
      { source: '/zlib/gzheader', destination: '/products/rainy-filters', permanent: true },
    ];
  },
};

module.exports = nextConfig;

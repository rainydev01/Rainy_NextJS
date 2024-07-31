/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Existing Redirections

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

      // New Redirections

      { source: '/${t}', destination: '/', permanent: true },
      { source: '/collections/frontpage', destination: '/collections/all', permanent: true },
      { source: '/blogs/embracing-sustainability-the-art-and-science-of-rainwater-harvesting/nurturing-sustainability-rainwater-harvesting-s-renaissance-in-india', destination: '/blogs/blog', permanent: true },
      { source: '/blogs/embracing-sustainability-the-art-and-science-of-rainwater-harvesting/harnessing-natures-bounty-a-comprehensive-guide-to-rainwater-harvesting-techniques', destination: '/blogs/blog', permanent: true },
      { source: '/shop/builder/ajax/ecom-proxy/products/', destination: '/shop/', permanent: true },
      { source: '/blogs/harnessing-natures-bounty-a-comprehensive-guide-to-rainwater-harvesting-techniques', destination: '/blogs/blog', permanent: true },
      { source: '/blogs/embracing-sustainability-the-art-and-science-of-rainwater-harvesting', destination: '/blogs/blog', permanent: true },
      { source: '/blogs/embracing-sustainability-the-art-and-science-of-rainwater-harvesting/replenishing-water-the-essential-benefits-of-rainwater-harvesting', destination: '/blogs/blog', permanent: true },
      { source: '/cdn/shop/', destination: '/', permanent: true },
      { source: '/${e}', destination: '/', permanent: true },
      { source: '/pages/contact-us-lg', destination: '/pages/contact-us', permanent: true },
      { source: '/blog', destination: '/blogs/blog', permanent: true },
      { source: '/rain-water-harvesting-filter', destination: '/products/rainy-fl-80-rain-water-harvesting-filter-suitable-for-area-upto-1300-sq-ft', permanent: true },
      { source: '/b', destination: '/', permanent: true },
      { source: '/products/rainy-fl-80-auto-self-cleaning-rainwater-harvesting-filter-pack-suitable-for-area-upto-130-square-meters', destination: '/products/rainy-fl-80-rain-water-harvesting-filter-suitable-for-area-upto-1300-sq-ft', permanent: true },
      { source: '/v1/produce', destination: '/', permanent: true },
      { source: '/comments', destination: '/', permanent: true },
      { source: '/wpm', destination: '/', permanent: true },
      { source: '/products/rainy-fl-500-rainwater-harvesting-filter-suitable-for-area-upto-500-square-meters', destination: '/products/rainy-fl-500-rain-water-harvesting-filter-suitable-for-area-upto-5400-square-feet', permanent: true },
      { source: '/products/rainy-fl-150-rainwater-harvesting-filter-suitable-for-area-upto-190-square-meters', destination: '/products/rainy-fl-150-rain-water-harvesting-filter-suitable-for-area-upto-1900-sq-ft', permanent: true },
      { source: '/products/rainy-fl-300-rainwater-harvesting-filter-suitable-for-area-upto-352-square-feet', destination: '/products/rainy-fl-300-rain-water-harvesting-filter-suitable-for-area-upto-3800-sqft', permanent: true },
    ];
  },
};

module.exports = nextConfig;

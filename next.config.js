/**   {} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gravatar.com'], // Add 'gravatar.com' to the list of allowed domains
    unoptimized: true,
    remotePatterns:[
      {
        protocol : "https",
        hostname : "**",
        port: '',
        pathname: '**',
      }
    ],
  }
};

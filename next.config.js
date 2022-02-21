/** @type {import('next').NextConfig} */
const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'links.papareact.com', 'fakestoreapi.com'
    ]
  }
}


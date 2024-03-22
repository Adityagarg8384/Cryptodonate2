/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  compiler: {
    styledComponents: true,
  },
  // webpack:(config)=>{
  //   config.resolve.fallback= {fs:false};
  //   return config
  // },
  images:{
    domains: ["ipfs.moralis.io"],
  }
}


module.exports = nextConfig

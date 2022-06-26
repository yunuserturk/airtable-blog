/** @type {import('next').NextConfig} */


require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  env:{
    API_KEY: process.env.API_KEY,
    API_BASE: process.env.API_BASE
  }
}

export default nextConfig

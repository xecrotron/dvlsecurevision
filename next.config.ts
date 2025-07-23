import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  
  basePath: '/dvlsecurevision',
  assetPrefix: '/dvlsecurevision',
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

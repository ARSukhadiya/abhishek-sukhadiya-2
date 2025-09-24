import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {

  // Export the project as static HTML
  output: 'export',

  // // Set the base path for assets like CSS and images
  // // This is crucial for GitHub Pages deployments
  // basePath: isProd ? `/${repoName}` : '',
  // assetPrefix: isProd ? `/${repoName}/` : '',
  
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);

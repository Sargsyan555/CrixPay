import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config, { isServer }) {
    if (!isServer) {
      // Ensure that fonts are handled correctly in production
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000, // Adjust the size limit if needed
            name: "/static/fonts/[name].[hash].[ext]",
          },
        },
      });
    }
    return config;
  },
};

export default nextConfig;

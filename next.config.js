/** @type {import('next').NextConfig} */
// const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogs.paisaintime.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_SPACE_URL,
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_SPACE_CDN_URL,
        port: "",
        pathname: "/**",
      },
    ],
  },
  sentry: {
    disableServerWebpackPlugin: false,
  },
};

// const sentryWebpackPluginOptions = {
//   // Additional config options for the Sentry webpack plugin. Keep in mind that
//   // the following options are set automatically, and overriding them is not
//   // recommended:
//   //   release, url, configFile, stripPrefix, urlPrefix, include, ignore

//   org: "sawalsha",
//   project: "pit-fe",
//   authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
// };

// module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
module.exports = nextConfig;

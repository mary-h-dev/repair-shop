import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
};

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
    org: "developer-h6w",
    project: "repair-shop",
  

    // An auth token is required for uploading source maps.
    authToken: process.env.SENTRY_AUTH_TOKEN,

    silent: false, // Can be used to suppress logs

    // hideSourceMaps: true,

    disableLogger: true,
});


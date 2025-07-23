"use client"

import { GoogleAnalytics } from '@next/third-parties/google'

export default function GoogleAnalyticsProvider() {
  // Only render the GoogleAnalytics component if GA ID exists
  if (!process.env.NEXT_PUBLIC_GA_ID) {
    return null;
  }

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />;
}
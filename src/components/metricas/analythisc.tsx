"use client"

import { useEffect } from "react"
import { GoogleAnalytics } from '@next/third-parties/google'

export default function GoogleAnalythicsProvider() {
  useEffect(() => {
    {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
  }, []);

  return null;
}
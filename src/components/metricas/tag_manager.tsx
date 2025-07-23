"use client"

import { useEffect } from "react"
import TagManager from "react-gtm-module"

export default function TagManagerProvider() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_TAG_MANAGER_ID) {
      TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_TAG_MANAGER_ID });
    }
  }, []);

  return null;
}
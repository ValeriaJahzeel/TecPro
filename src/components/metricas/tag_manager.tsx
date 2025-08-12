"use client"

import { useEffect } from "react"
import TagManager from "react-gtm-module"

export default function TagManagerProvider() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tagManagerId = process.env.NEXT_PUBLIC_TAG_MANAGER_ID;
      
      if (!tagManagerId) {
        console.warn('Google Tag Manager ID is not defined in environment variables');
        return;
      }

      try {
        TagManager.initialize({ 
          gtmId: tagManagerId,
          // Enable these options as needed
          // dataLayer: {
          //   // Initial dataLayer configuration
          // },
          // events: {
          //   // Custom events configuration
          // },
          // preview: process.env.NODE_ENV === 'development'
        });
        console.log('Google Tag Manager initialized successfully');
      } catch (error) {
        console.error('Failed to initialize Google Tag Manager:', error);
      }
    }
  }, []);

  return null;
}
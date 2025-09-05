"use client";

import { useEffect } from 'react';

export default function TitleOverride() {
  useEffect(() => {
    try {
      // Set a shorter browser tab title after hydration so users see "SFN Foundation"
      document.title = 'SFN Foundation';
    } catch {}
  }, []);

  return null;
}

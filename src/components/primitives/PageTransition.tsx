"use client";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function PageTransition({ children, duration = 160 }: { children: React.ReactNode; duration?: number }) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in on mount
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleStart = () => {
      // start fade-out
      setVisible(false);
    };
    const handleComplete = () => {
      // ensure fade-in after navigation
      setTimeout(() => setVisible(true), 10);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    <div
      style={{ transition: `opacity ${duration}ms ease` }}
      className={`${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}

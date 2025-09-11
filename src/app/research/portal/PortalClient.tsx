"use client";
import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import InfoHero from '@/components/content/info/InfoHero';
import EmailSignInButton from '@/components/primitives/EmailSignInButton';
import ActionCard from '@/components/content/research/ActionCard';
import { Button } from '@/components/primitives/Button';
import { FiLock } from 'react-icons/fi';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

export default function PortalClient() {
  const { data: session, status } = useSession();
  const isSignedIn = status === 'authenticated' && Boolean(session && session.user && (session.user.email || session.user.id));
  const isSpecialist = session?.user?.role === 'Specialist';

  useEffect(() => {
    if (session && session.user && !isSpecialist) {
      const sentKey = `access-request-sent-${session.user.email}`;
      if (!window.localStorage.getItem(sentKey)) {
        fetch('/api/request-access', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userEmail: session.user.email }),
        });
        window.localStorage.setItem(sentKey, 'true');
      }
    }
  }, [session, isSpecialist]);

  if (status === 'loading') {
    return (
      <main className="flex-1 flex items-center justify-center">
        <div role="status" aria-label="Loading" className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <span className="sr-only">Loading</span>
        </div>
      </main>
    );
  }
  return (
    <div className={`bg-offWhite flex flex-col items-start sm:items-center justify-start sm:justify-center py-0 ${isSignedIn && isSpecialist ? 'sm:py-0' : 'sm:py-12'} px-0 w-full relative`}>
        {/* Sign out button in top-right when signed in */}
        {isSignedIn && (
          <div className="absolute top-4 right-4 z-50">
            <Button
              variant="outline"
              size="sm"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Sign out
            </Button>
          </div>
        )}
        {/* Specialist: show hero and portal content inside card */}
        {isSignedIn && isSpecialist ? (
          <>
            <div className="w-full mb-6">
              <InfoHero title="Research Portal" />
            </div>
            {session?.user?.name && (
              <h2 className="text-xl font-semibold mb-6 text-primary">{getGreeting()}, {session.user.name}!</h2>
            )}
            <p>You are approved to upload the latest research.</p>
          </>
        ) : (
          // Not signed in or signed in without specialist role
          !isSignedIn ? (
            <ActionCard
              embedded
              topLogoBanner={true}
              actions={<div className="mt-4"><EmailSignInButton /></div>}
            />
          ) : (
            <ActionCard
              embedded
              title={<div className="text-gray flex items-center justify-center"><FiLock className="mr-2" size={28} /><span className="text-2xl font-bold">Access Restricted</span></div>}
            />
          )
    )}
  </div>
  );
}

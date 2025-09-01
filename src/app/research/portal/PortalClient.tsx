"use client";
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import InfoHero from '@/components/content/info/InfoHero';
import EmailSignInButton from '@/components/primitives/EmailSignInButton';
import { FiLock } from 'react-icons/fi';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

export default function PortalClient() {
  const { data: session } = useSession();
  // Consider a session 'signed-in' only if it contains an identifying field (email or id).
  const isSignedIn = Boolean(session && session.user && (session.user.email || session.user.id));
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

  if (isSignedIn && isSpecialist) {
    return (
      <>
        <div className="w-full">
          <InfoHero title="Research Portal" />
        </div>
        <main className="flex-1">
          <div className="container-padding mx-auto py-16">
            {session?.user?.name && (
              <h2 className="text-xl font-semibold mb-6 text-primary">{getGreeting()}, {session.user.name}!</h2>
            )}
            <p>You are approved to upload the latest research.</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <main className="flex-1 flex items-center justify-center">
  {!isSignedIn ? (
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Sign in to access the Research Portal</h1>
          <div className="mt-4">
            <EmailSignInButton />
          </div>
        </div>
      ) : (
        <div className="max-w-md w-full text-center">
          <div className="text-gray flex items-center justify-center mb-4">
            <FiLock className="mr-2" size={28} />
            <h1 className="text-2xl font-bold">Access Restricted</h1>
          </div>
          <p className="mb-4">
            You are signed in, but do not have permission to upload research.<br />
            Please <a href="/contact" className="text-primary underline hover:text-primary/80">contact</a> the SFN Foundation for access.
          </p>
          <p className="mb-4">
            If you used the wrong email to sign in, please sign in again.
          </p>
          <div className="mb-4">
            <EmailSignInButton />
          </div>
        </div>
      )}
    </main>
  );
}

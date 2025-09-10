"use client";
import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
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
  // Wrap portal content in a centered card similar to the Login component
  return (
    <div className="bg-offWhite flex flex-col items-start sm:items-center justify-start sm:justify-center py-0 sm:py-12 px-0 w-full">
      <div className="bg-white rounded-none sm:rounded-2xl default-shadow w-full max-w-none sm:max-w-md p-6 sm:p-8 text-center relative">
        {/* Sign out button in top-right when signed in */}
        {isSignedIn && (
          <div className="absolute top-4 right-4">
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="text-sm text-gray/80 underline"
            >
              Sign out
            </button>
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
            <>
              <h1 className="text-3xl font-bold mb-8">Research Portal</h1>
              <div className="mt-4">
                <EmailSignInButton />
              </div>
              <div className="mt-8 text-xs text-gray/60">
                The Research Portal provides approved clinicians and researchers a secure place to submit, review, and collaborate on SFN studies and data. Please <a href="/contact" className="text-primary/80 underline">contact us</a> to request approval.
              </div>
            </>
          ) : (
            <>
              <div className="text-gray flex items-center justify-center mb-4">
                <FiLock className="mr-2" size={28} />
                <h1 className="text-2xl font-bold">Access Restricted</h1>
              </div>
              <p className="mb-4">
                You are signed in, but do not have permission to upload research.<br />
                Please <a href="/contact" className="text-primary underline hover:text-primary/80">contact</a> the SFN Foundation for access.
              </p>
              <p className="mb-4">If you used the wrong email to sign in, please sign in again.</p>
              <div className="mb-4">
                <EmailSignInButton />
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

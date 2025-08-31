import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import InfoHero from '@/components/info/InfoHero';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import EmailSignInButton from '@/components/ui/EmailSignInButton';
import { FiLock } from 'react-icons/fi';


export default async function ResearchPortalPage() {
  let session = null;
  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    session = null;
  }
  // Debug: log session and role
  console.log('Session:', session);
  console.log('Session user role:', session?.user?.role);

  const isSpecialist = session?.user?.role === 'Specialist';

  // Helper to get greeting
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }

  return (
    <>
      <Header />
      <div className="bg-offWhite min-h-screen flex flex-col">
        {session && isSpecialist ? (
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
        ) : (
          <main className="flex-1 flex items-center justify-center">
            {!session ? (
              /* Sign In View */
              <div className="max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Sign in to access the Research Portal</h1>
                <div className="mt-4">
                  <EmailSignInButton />
                </div>
              </div>
            ) : (
              /* Access Restricted View */
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
        )}
        <Footer />
      </div>
    </>
  );
}

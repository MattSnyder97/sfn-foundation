import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import InfoHero from '@/components/info/InfoHero';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import EmailSignInButton from '@/components/ui/EmailSignInButton';

// List of approved specialist emails
const approvedSpecialists = [
  'snydermatt1997@gmail.com',
  'specialist2@email.com',
  // Add more emails here
];

export default async function ResearchPortalPage() {
  let session = null;
  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    session = null;
  }

  let isSpecialist = false;
  if (session?.user?.email) {
    isSpecialist = approvedSpecialists.includes(session.user.email);
  }

  return (
    <>
      <Header />
      <main className="bg-offWhite">
        
        {!session ? (

          /* Sign In View */
          <div className="max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4">Sign in to access the Research Portal</h1>
            <EmailSignInButton />
          </div>

        ) : !isSpecialist ? (

          /* Access Restricted View */
          <div className="max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4">Access Restricted</h1>
            <p className="mb-4">
              You are signed in, but do not have permission to upload research. Please <a href="/contact" className="text-primary underline hover:text-primary/80">contact</a> the SFN Foundation for access.
            </p>
          </div>

        ) : (

          /* Approved User View */
          <div>
            <InfoHero title="Research Portal" />
            <div className="container-padding mx-auto py-16">
              <p>You are approved to upload the latest research.</p>
            </div>
          </div>
          
        )}
      </main>
      <Footer />
    </>
  );
}

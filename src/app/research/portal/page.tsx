import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import EmailSignInButton from '@/components/ui/EmailSignInButton';

// List of approved specialist emails
const approvedSpecialists = [
  'specialist1@email.com',
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
      <main className="min-h-screen flex flex-col items-center justify-center py-16">
        {!session ? (
          <div className="max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4">Sign in to access the Research Portal</h1>
            <EmailSignInButton />
          </div>
        ) : !isSpecialist ? (
          <div className="max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4">Access Restricted</h1>
            <p className="mb-4">You are signed in, but do not have permission to upload research. Please contact the SFN Foundation for access.</p>
          </div>
        ) : (
          <div className="max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Research Portal</h1>
            <p className="mb-4">You are approved to upload the latest research.</p>
            {/* Upload form goes here */}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

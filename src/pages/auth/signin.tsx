import { getProviders, signIn } from 'next-auth/react';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';
import { ClientSafeProvider } from 'next-auth/react';

interface SignInProps {
  providers: Record<string, ClientSafeProvider>;
}

export default function SignIn({ providers }: SignInProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      await signIn('email', { email, redirect: true, callbackUrl: '/research/portal' });
    } catch {
      setError('Sign in failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-offWhite flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl default-shadow w-full max-w-md p-8 text-center">
        <img src="/logos/logo.svg" alt="SFN Foundation" width={285} height={41} className="mx-auto mb-6" />
        <p className="text-gray-500 mb-6">Enter an authorized email to gain access.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="youremail@email.com"
            className="border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
            autoFocus
          />
          {error && (
            <div className="bg-primary text-offWhite text-sm mb-2 px-4 py-2 rounded-xl">
              {error}
            </div>
          )}
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Verification Email'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } };
}
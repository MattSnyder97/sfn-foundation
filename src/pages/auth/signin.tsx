import { getProviders, signIn } from 'next-auth/react';
import { Button } from '../../components/primitives/Button';
import { useState } from 'react';
import ActionCard, { ActionCardInput, ActionCardError } from '@/components/content/research/ActionCard';

export default function SignIn() {
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
    <ActionCard
      topLogoBanner={true}
      subtitle={<>Enter your email address to receive a sign-in link.</>}
      form
      formOnSubmit={handleSubmit}
      actions={(
        <>
          <ActionCardInput
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email address"
            autoFocus
          />
          {error && <ActionCardError>{error}</ActionCardError>}
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Verification Email'}
          </Button>
        </>
      )}
    />
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } };
}
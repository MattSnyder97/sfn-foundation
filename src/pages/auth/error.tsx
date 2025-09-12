import { Button } from '../../components/primitives/Button';
import ActionCard from '@/components/content/research/ActionCard';

export default function AuthError() {
  return (
    <ActionCard
      title="Sign-in Error"
      subtitle={<p className="text-gray">Your sign-in link is invalid or has expired.</p>}
      actions={<Button type="button" variant="outlinePrimary" size="md" className="mt-4" onClick={() => window.location.href = '/auth/signin'}>Back to Sign In</Button>}
      compact
    />
  );
}

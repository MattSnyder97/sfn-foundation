import { Button } from '../../components/primitives/Button';
import Login from '@/components/content/research/Login';

export default function AuthError() {
  return (
    <Login
      title="Sign-in Error"
      subtitle={<p className="text-gray-500">Your sign-in link is invalid or has expired.</p>}
      actions={<Button type="button" variant="primary" size="md" className="mt-4" onClick={() => window.location.href = '/auth/signin'}>Back to Sign In</Button>}
      compact
    />
  );
}

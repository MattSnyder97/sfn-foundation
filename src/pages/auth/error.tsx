import { Button } from '../../components/ui/Button';
import Image from 'next/image';

export default function AuthError() {
  return (
    <div className="min-h-screen bg-offWhite flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl default-shadow w-full max-w-md p-8 text-center">
      <Image src="/logos/logo.svg" alt="SFN Foundation" width={285} height={41} className="mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-primary mb-2">Sign-in Error</h2>
        <p className="text-gray-500 mb-6">Your sign-in link is invalid or has expired.<br />Please request a new sign-in link.</p>
        <Button
          type="button"
          variant="primary"
          size="md"
          className="mt-4"
          onClick={() => window.location.href = '/auth/signin'}
        >
          Back to Sign In
        </Button>
      </div>
    </div>
  );
}

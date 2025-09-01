import AnimatedCheck from '@/components/ui/AnimatedCheck';
import Login from '@/components/content/research/Login';

export default function CheckEmail() {
  return (
    <Login
      icon={<AnimatedCheck className="text-gray mr-1" size={32} />}
      title="Email Sent"
      subtitle={<>
        Please check your inbox and spam folder.<br />Follow the link to sign-in.
      </>}
    />
  );
}

import AnimatedCheck from '@/components/primitives/AnimatedCheck';
import ActionCard from '@/components/content/research/ActionCard';

export default function CheckEmail() {
  return (
    <ActionCard
      topLogoBanner={true}
      icon={<AnimatedCheck className="text-gray mr-1" size={32} />}
      title="Email Sent"
      subtitle={<>
        Please check your inbox and spam folder.<br />Follow the link to sign-in.
      </>}
    />
  );
}

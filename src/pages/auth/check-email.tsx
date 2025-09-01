import { FiCheckCircle } from 'react-icons/fi';
import Login from '@/components/content/research/Login';

export default function CheckEmail() {
  return (
    <Login
      icon={<FiCheckCircle className="text-gray mr-2" size={32} />}
      title="Email Sent"
      subtitle={<>
        Please check your inbox and spam folder.<br />Follow the link to sign-in.
      </>}
    />
  );
}

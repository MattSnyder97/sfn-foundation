import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

export default function CheckEmail() {
  return (
    <div className="min-h-screen bg-offWhite flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl default-shadow w-full max-w-md p-12 text-center">
      <Image src="/logos/logo.svg" alt="SFN Foundation" width={285} height={41} className="mx-auto mb-12" />
        <div className="flex items-center justify-center mb-8">
          <FiCheckCircle className="text-gray mr-2" size={32} />
          <h2 className="text-xl font-semibold text-gray">Email Sent</h2>
        </div>
        <p className="text-gray/80 text-sm">Please check your inbox and spam folder. 
          <br />Follow the link to complete sign-in.</p>
      </div>
    </div>
  );
}

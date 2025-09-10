import Image from 'next/image';
import React, { ReactNode } from 'react';

interface LoginProps {
  title?: string;
  subtitle?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
  compact?: boolean; // use smaller padding when true
  // form mode: if true, Login will render `actions` inside a <form> and call `formOnSubmit`
  form?: boolean;
  formOnSubmit?: (e: React.FormEvent) => void;
}

export default function Login({ title, subtitle, icon, actions, compact = false, form = false, formOnSubmit, }: LoginProps) {
  const cardPadding = compact ? 'p-8' : 'p-12';
  const logoMb = compact ? 'mb-6' : 'mb-12';

  return (
    <div className="min-h-[100dvh] bg-offWhite flex flex-col items-center justify-center py-0 sm:py-12 px-0">
      <div className={`bg-white rounded-none sm:rounded-2xl default-shadow w-full max-w-none sm:max-w-md ${cardPadding} text-center sm:min-h-auto`}>
  <Image src="/logos/logo.svg" alt="SFN Foundation" width={285} height={41} className={`mx-auto ${logoMb} w-auto max-w-full`} />

        {icon && (
          <div className="flex items-center justify-center mb-8">
            {icon}
            {title && <h2 className="text-xl font-semibold text-gray ml-2">{title}</h2>}
          </div>
        )}

        {!icon && title && (
          <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
        )}

        {subtitle && <div className="text-gray/80 text-sm mb-6">{subtitle}</div>}

        {form ? (
          <form onSubmit={formOnSubmit} className="flex flex-col gap-8">
            {actions}
          </form>
        ) : (
          actions && <div className="mt-4">{actions}</div>
        )}

        <div className="mt-16 text-xs text-gray/60">
          The Research Portal provides approved clinicians and researchers a secure place to submit, review, and collaborate on SFN studies and data. Please <a href="/contact" className="text-primary/80 underline">contact us</a> to request approval.
        </div>
      </div>
    </div>
  );
}

// Small form helpers so styling for inputs/errors lives in this file
export function LoginInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={`border border-gray-300 rounded-md px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary ${className ?? ''}`}
    />
  );
}

export function LoginError({ children }: { children: ReactNode }) {
  return <div className="bg-primary text-offWhite text-sm mb-2 px-4 py-2 rounded-xl">{children}</div>;
}

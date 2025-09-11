import Image from 'next/image';
import React, { ReactNode } from 'react';

interface ActionCardProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
  compact?: boolean; // use smaller padding when true
  topLogoBanner?: boolean; // when true, render a filled banner header like the Contact page
  embedded?: boolean; // when true, render only the inner card (no full-page wrappers)
  // form mode: if true, ActionCard will render `actions` inside a <form> and call `formOnSubmit`
  form?: boolean;
  formOnSubmit?: (e: React.FormEvent) => void;
}

export default function ActionCard({ title, subtitle, icon, actions, compact = false, form = false, formOnSubmit, topLogoBanner, embedded = false, }: ActionCardProps) {
  const cardPadding = compact ? 'p-8' : 'p-12';
  const logoMb = compact ? 'mb-6' : 'mb-12';

  // If topLogoBanner is true, render the contact-style filled header inside the card
  if (topLogoBanner) {
    const inner = (
      <div className="bg-white rounded-none sm:rounded-2xl default-shadow w-full max-w-lg mx-auto mt-0 md:mt-12 mb-0 md:mb-16 overflow-hidden">
        <div className="w-full sm:rounded-t-2xl" style={{ background: 'var(--color-primary)' }}>
          <div className="px-6 md:px-8 py-8 md:py-8 text-offWhite">
            <div className="flex items-center justify-center">
              <Image src="/logos/logoWhite.svg" alt="SFN Foundation logo" width={285} height={41} className="" />
            </div>
          </div>
        </div>

        <div className={`p-8 ${cardPadding} text-center`}>
          {/* Show logo above content only when topLogoBanner is not present */}
          {!topLogoBanner && (
            <Image src="/logos/logo.svg" alt="SFN Foundation logo" width={285} height={41} className={`mx-auto ${logoMb} w-auto max-w-full`} />
          )}

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

          <div className="mt-12 text-xs text-gray">
            The Research Portal provides approved clinicians and researchers a secure place to submit, review, and collaborate on SFN studies and data.
            <div className="mt-2">Please <a href="/contact?subject=Research%20Portal%20Access" className="text-primary/80 underline">contact us</a> to request approval.</div>
          </div>
        </div>
      </div>
    );
    return embedded ? inner : (
      <div className="min-h-[100dvh] bg-offWhite flex flex-col items-center justify-center py-0 sm:py-12 px-0">
        {inner}
      </div>
    );
  }

  const innerDefault = (
    <div className={`bg-white rounded-none sm:rounded-2xl default-shadow w-full max-w-none sm:max-w-md ${cardPadding} text-center sm:min-h-auto`}>
  <Image src="/logos/logo.svg" alt="SFN Foundation logo" width={285} height={41} className={`mx-auto ${logoMb} w-auto max-w-full`} />

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

        <div className="mt-12 text-xs text-gray/60">
          The Research Portal provides approved clinicians and researchers a secure place to submit, review, and collaborate on SFN studies and data.
          <div className="mt-4">Please <a href="/contact?subject=Research%20Portal%20Access" className="text-primary/80 underline">contact us</a> to request approval.</div>
        </div>
    </div>
  );
  return embedded ? innerDefault : (
    <div className="min-h-[100dvh] bg-offWhite flex flex-col items-center justify-center py-0 sm:py-12 px-0">
      {innerDefault}
    </div>
  );
}

// Small form helpers so styling for inputs/errors lives in this file
export function ActionCardInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={`border border-gray-300 rounded-md px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary ${className ?? ''}`}
    />
  );
}

export function ActionCardError({ children }: { children: ReactNode }) {
  return <div className="bg-primary text-offWhite text-sm mb-2 px-4 py-2 rounded-xl">{children}</div>;
}

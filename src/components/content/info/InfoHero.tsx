"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { segmentLabels } from '@/lib/utils';

interface InfoHeroProps {
  title: string;
}

export default function InfoHero({ title }: InfoHeroProps) {
  const pathname = usePathname();
  // Reuseable visible focus styles for keyboard users
  const focusClasses = "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-opacity-90";
  
  // Generate breadcrumbs from pathname
  const generateBreadcrumbs = () => {
  if (!pathname) return [];
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs: Array<{ label: string; href: string; isLast?: boolean }> = [{ label: 'Home', href: '/' }];
    
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = segmentLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      
      breadcrumbs.push({
        label,
        href: currentPath,
        isLast: index === pathSegments.length - 1
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
  <section className="relative w-full overflow-hidden">
      {/* Layer 1: Solid color */}
      <div className="absolute inset-0" style={{ background: '#5159CF', zIndex: 0 }} />
      {/* Layer 2: Linear gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #5159CF 20%, #5C58D1 100%)',
          opacity: 0.5,
          zIndex: 1,
        }}
      />
      {/* Content */}
      <div className="container-padding mx-auto relative z-10 flex items-center min-h-[160px] py-16 md:px-0">
  <div className="w-full flex flex-col justify-center items-center text-offWhite max-w-5xl text-center md:items-start md:text-left">
          {/* Breadcrumbs */}
          <nav className="mb-4 print:hidden" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center md:justify-start space-x-1 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight 
                      className="h-4 w-4 text-white mx-2 translate-y-0.5" 
                      strokeWidth={2}
                    />
                  )}
                  {crumb.isLast ? (
                    <span className="text-white font-bold">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link 
                      href={crumb.href}
                      className={`text-white hover:text-white transition-colors duration-200 hover:underline ${focusClasses}`}
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
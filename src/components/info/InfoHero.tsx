"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface InfoHeroProps {
  title: string;
}

export default function InfoHero({ title }: InfoHeroProps) {
  const pathname = usePathname();
  
  // Generate breadcrumbs from pathname
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs: Array<{ label: string; href: string; isLast?: boolean }> = [{ label: 'Home', href: '/' }];
    
    // Mapping for better display names
    const segmentLabels: Record<string, string> = {
      'about': 'About',
      'research': 'Research', 
      'resources': 'Resources',
      'symptoms': 'Symptoms',
      'causes': 'Causes',
      'treatments': 'Treatments',
      'diagnosis': 'Diagnosis',
      'newly-diagnosed': 'Newly Diagnosed',
      'caregiver-tips': 'Caregiver Tips',
      'doctors': 'Approved Doctors',
      'dictionary': 'SFN Dictionary',
      'supplements': 'Supplements'
    };
    
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
      {/* Primary background */}
      <div className="absolute inset-0 bg-primary" />
     
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-secondary/30"/>
     
      {/* Content */}
      <div className="container-padding mx-auto relative z-10 flex items-center min-h-[160px] py-16">
        <div className="text-left text-offWhite max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight 
                      className="h-4 w-4 text-white/60 mx-2 translate-y-0.5" 
                      strokeWidth={2}
                    />
                  )}
                  {crumb.isLast ? (
                    <span className="text-white font-medium">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link 
                      href={crumb.href}
                      className="text-white/60 hover:text-white transition-colors duration-200 hover:underline"
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
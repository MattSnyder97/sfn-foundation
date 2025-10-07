/**
 * Mapping for better display names for slugs used in navigation and breadcrumbs.
 */
export const segmentLabels: Record<string, string> = {
  'about-sfn': 'About SFN',
  'about-the-foundation': 'About the Foundation',
  'accessibility': 'Accessibility',
  'caregiver-tips': 'Caregiver Tips',
  'causes': 'Causes',
  'diagnosis': 'Diagnosis',
  'glossary': 'SFN Glossary',
  'disclaimer': 'Medical Disclaimer',
  'doctors': 'Approved Doctors',
  'specialists': 'Find a Specialist',
  'mutual-aid': 'Mutual Aid',
  'newly-diagnosed': 'Newly Diagnosed',
  'patient-stories': 'Patient Stories',
  'privacy-policy': 'Privacy Policy',
  'research': 'Research',
  'resources': 'Resources',
  'support-group': 'Support Group',
  'supplements': 'Supplements',
  'symptoms': 'Symptoms',
  'terms-of-use': 'Terms of Use',
  'treatments': 'Treatments'
};
import { type ClassValue } from "clsx"
import clsx from "clsx"

/**
 * Minimal cn helper using only clsx.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

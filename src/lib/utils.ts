/**
 * Mapping for better display names for slugs used in navigation and breadcrumbs.
 */
export const segmentLabels: Record<string, string> = {
  'about': 'About',
  'accessibility': 'Accessibility',
  'caregiver-tips': 'Caregiver Tips',
  'causes': 'Causes',
  'diagnosis': 'Diagnosis',
  'dictionary': 'SFN Dictionary',
  'disclaimer': 'Medical Disclaimer',
  'doctors': 'Approved Doctors',
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

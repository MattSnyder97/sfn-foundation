import { type ClassValue } from "clsx"
import clsx from "clsx"

/**
 * Minimal cn helper using only clsx.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

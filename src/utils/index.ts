import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function withBase(link: string): string {
  return import.meta.env.BASE_URL + "/" + link
}

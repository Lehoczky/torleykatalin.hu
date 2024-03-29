import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function withBase(link: string): string {
  const linkPrefixed = import.meta.env.BASE_URL + "/" + link
  return linkPrefixed.replaceAll("//", "/")
}

export function anchorAttributes(attrs: Record<string, any>) {
  const target: HTMLAnchorElement["target"] =
    attrs.href && isExternalLink(attrs.href) && attrs.target == undefined
      ? "_blank"
      : attrs.target

  return { ...attrs, target }
}

function isExternalLink(link: string): boolean {
  return link.startsWith("http")
}

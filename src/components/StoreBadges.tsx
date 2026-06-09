import type { ReactNode } from "react";

type StoreLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
};

const StoreLink = ({ href, label, children }: StoreLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-[#b0b0b0] transition-colors duration-200 hover:text-gray-600"
  >
    {children}
  </a>
);

export const AppStoreIcon = () => (
  <StoreLink
    href="https://apps.apple.com/us/app/edstream/id6736952355"
    label="Download EdStream on the App Store"
  >
    <svg width="20" height="24" viewBox="0 0 22 26" fill="currentColor" aria-hidden="true">
      <path d="M18.25 13.87c-.03-2.58 2.11-3.81 2.2-3.88-1.2-1.74-3.07-1.98-3.71-2.01-1.58-.16-3.09.93-3.88.93-.8 0-2.04-.9-3.35-.88-1.73.03-3.32.99-4.19 2.52-1.79 3.1-.46 7.7 1.29 10.22.86 1.24 1.88 2.63 3.21 2.59 1.29-.05 1.77-.82 3.32-.82 1.55 0 1.98.82 3.35.8 1.38-.02 2.26-1.25 3.11-2.5.98-1.41 1.38-2.78 1.4-2.85-.03-.01-2.7-1.03-2.73-4.1zm-2.5-7.62c.71-.86 1.19-2.05 1.06-3.24-1.02.04-2.25.67-2.98 1.52-.66.76-1.23 1.99-1.08 3.16.95.07 1.92-.48 2.96-1.32z" />
    </svg>
  </StoreLink>
);

/** Google Play mark with four internal segments (monochrome) */
export const GooglePlayIcon = () => (
  <StoreLink
    href="https://play.google.com/store/apps/details?id=com.edstreamchat.app"
    label="Get EdStream on Google Play"
  >
    <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" />
      <path d="M16.81 15.12 6.05 21.34l8.49-8.49 2.27 2.27Z" />
      <path d="M20.16 10.81c.34.27.34.92 0 1.19l-2.27 1.31-2.5-2.5 2.5-2.5 2.27 1.31Z" />
      <path d="M6.05 2.66 16.81 8.88 14.54 11.15 6.05 2.66Z" />
      <path
        fill="none"
        stroke="white"
        strokeWidth="0.5"
        strokeOpacity="0.85"
        d="M3.84 2.15L13.69 12 3.84 21.85M6.05 2.66l8.49 8.49M6.05 21.34l8.49-8.49M14.54 11.15l5.7 3.34"
      />
    </svg>
  </StoreLink>
);

export const HeaderStoreLinks = () => (
  <div className="flex items-center gap-4">
    <div className="h-8 w-px bg-gray-200" />
    <div className="flex items-center gap-4">
      <AppStoreIcon />
      <GooglePlayIcon />
    </div>
  </div>
);

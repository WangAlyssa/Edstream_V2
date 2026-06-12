type AppStoreBadgeProps = {
  className?: string;
};

const AppStoreBadge = ({ className = "h-[78px] w-[260px]" }: AppStoreBadgeProps) => (
  <svg
    className={className}
    viewBox="0 0 260 78"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Download on the App Store"
  >
    <rect x="0.5" y="0.5" width="259" height="77" rx="8" fill="#000" stroke="#A6A6A6" strokeWidth="1" />
    <path
      fill="#fff"
      d="M44.5 39.1c-.04-4.1 3.36-6.1 3.52-6.2-1.9-2.8-4.85-3.2-5.85-3.2-2.5-.25-4.9 1.45-6.15 1.45-1.25 0-3.15-1.45-5.2-1.4-2.7.04-5.15 1.55-6.5 3.95-2.8 4.9-.7 12.2 2 16.2 1.3 1.9 2.9 4.1 4.95 4.05 2-.08 2.75-1.3 5.15-1.3 2.4 0 3.1 1.3 5.2 1.25 2.15-.04 3.5-2 4.85-3.95 1.5-2.2 2.15-4.35 2.2-4.5-.05-.02-4.25-1.65-4.3-6.55zm-3.95-12.1c1.1-1.35 1.85-3.25 1.65-5.15-1.6.06-3.55 1.05-4.7 2.4-1 1.2-1.9 3.15-1.65 5 .95.07 1.95-.6 3.05-1.75z"
    />
    <text
      x="78"
      y="30"
      fill="#fff"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      fontSize="13"
      letterSpacing="0.04em"
    >
      Download on the
    </text>
    <text
      x="78"
      y="56"
      fill="#fff"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      fontSize="28"
      fontWeight="600"
      letterSpacing="-0.01em"
    >
      App Store
    </text>
  </svg>
);

export default AppStoreBadge;

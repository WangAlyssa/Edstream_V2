type AppStoreBadgeProps = {
  className?: string;
};

/** Matches Google Play badge asset ratio (646×250). */
const AppStoreBadge = ({ className }: AppStoreBadgeProps) => (
  <svg
    className={className}
    viewBox="0 0 646 250"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Download on the App Store"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect x="1" y="1" width="644" height="248" rx="12" fill="#000" stroke="#A6A6A6" strokeWidth="2" />
    <path
      fill="#fff"
      d="M93.5 125.5c-.06-6.5 5.35-9.65 5.6-9.8-3-4.4-7.7-5-9.25-5.05-3.95-.4-7.75 2.3-9.75 2.3-2 0-5.1-2.3-8.4-2.25-4.35.07-8.35 2.45-10.55 6.2-4.85 8.5-1.25 21.15 3.55 28.1 2.05 3 4.5 6.35 7.7 6.25 3.05-.12 4.2-2 7.9-2 3.7 0 4.75 2 8 1.95 3.35-.06 5.45-2.55 7.5-4.85 2.25-3.3 3.2-6.5 3.25-6.7-.08-.04-7.65-2.9-7.75-11.5zm-7.15-19.2c2-2.4 3.35-5.75 2.95-9.05-2.85.1-6.3 1.65-8.35 3.75-1.95 2.25-3.65 5.85-3.2 9.25 1.95.15 3.95-.95 6.15-2.95z"
    />
    <text
      x="158"
      y="98"
      fill="#fff"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      fontSize="22"
      letterSpacing="0.06em"
    >
      Download on the
    </text>
    <text
      x="156"
      y="168"
      fill="#fff"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      fontSize="58"
      fontWeight="600"
      letterSpacing="-0.02em"
    >
      App Store
    </text>
  </svg>
);

export default AppStoreBadge;

const BADGE_VIEWBOX = "0 0 200 56";

const BadgeFrame = () => (
  <rect x="0.5" y="0.5" width="199" height="55" rx="7" fill="#000" stroke="#A6A6A6" strokeWidth="1" />
);

const AppleIcon = () => (
  <path
    fill="#fff"
    d="M28.2 28.3c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3.1-2-3.7-2-1.6-.1-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7.03-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.05 1.8-.8 3.3-.8 1.6 0 2 0.8 3.4.8 1.4-.03 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.03-.01-2.7-1-2.7-4.1zm-2.5-7.6c.7-.9 1.2-2.1 1.1-3.2-1 .04-2.3.7-3 1.5-.7.8-1.2 2-1.1 3.2.95.07 1.9-.5 3-1.5z"
    transform="translate(6, 6) scale(1.05)"
  />
);

const GooglePlayIcon = () => (
  <g transform="translate(10, 10)">
    <path fill="#00D2FF" d="M2 2.5v31l16.5-15.5L2 2.5z" />
    <path fill="#FFD500" d="M20.5 18.5L2 34.5l22-12.5-3.5-3.5z" />
    <path fill="#F15153" d="M2 2.5l22 12.5-3.5 3.5L2 2.5z" />
    <path fill="#00F076" d="M24 18.5L2 34.5l18.5-16z" />
  </g>
);

const badgeTextStyle = {
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fill: "#fff",
};

export const AppStoreBadge = ({ className = "h-14 w-[200px]" }: { className?: string }) => (
  <svg
    viewBox={BADGE_VIEWBOX}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Download on the App Store"
  >
    <BadgeFrame />
    <AppleIcon />
    <text x="52" y="23" {...badgeTextStyle} fontSize="9" letterSpacing="0.04em">
      Download on the
    </text>
    <text x="52" y="40" {...badgeTextStyle} fontSize="16" fontWeight="600" letterSpacing="-0.01em">
      App Store
    </text>
  </svg>
);

export const GooglePlayBadge = ({ className = "h-14 w-[200px]" }: { className?: string }) => (
  <svg
    viewBox={BADGE_VIEWBOX}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Get it on Google Play"
  >
    <BadgeFrame />
    <GooglePlayIcon />
    <text x="52" y="23" {...badgeTextStyle} fontSize="9" letterSpacing="0.08em">
      GET IT ON
    </text>
    <text x="52" y="40" {...badgeTextStyle} fontSize="16" fontWeight="600" letterSpacing="-0.01em">
      Google Play
    </text>
  </svg>
);

const badgeLinkClass =
  "inline-flex h-14 w-[200px] shrink-0 items-center transition-transform duration-200 hover:scale-105";

type StoreBadgesProps = {
  className?: string;
};

const StoreBadges = ({ className = "" }: StoreBadgesProps) => (
  <div className={`flex flex-wrap items-center gap-3 ${className}`}>
    <a
      href="https://apps.apple.com/us/app/edstream/id6736952355"
      target="_blank"
      rel="noopener noreferrer"
      className={badgeLinkClass}
    >
      <AppStoreBadge className="h-full w-full" />
    </a>
    <a
      href="https://play.google.com/store/apps/details?id=com.edstreamchat.app&pcampaignid=web_share"
      target="_blank"
      rel="noopener noreferrer"
      className={badgeLinkClass}
    >
      <GooglePlayBadge className="h-full w-full" />
    </a>
  </div>
);

export default StoreBadges;

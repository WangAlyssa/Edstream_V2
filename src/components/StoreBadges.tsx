import AppStoreBadge from "@/components/AppStoreBadge";

const GOOGLE_PLAY_BADGE =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

/** Shared box size — matches Google Play badge aspect ratio (646×250). */
const badgeBox = "block h-[50px] w-[129px] sm:h-[60px] sm:w-[155px]";

type StoreBadgesProps = {
  className?: string;
};

const StoreBadges = ({ className = "" }: StoreBadgesProps) => (
  <div className={`flex flex-wrap items-center gap-3 ${className}`}>
    <a
      href="https://apps.apple.com/us/app/edstream/id6736952355"
      target="_blank"
      rel="noopener noreferrer"
      className={`${badgeBox} shrink-0 transition-transform duration-200 hover:scale-105`}
      aria-label="Download EdStream on the App Store"
    >
      <AppStoreBadge className="h-full w-full" />
    </a>
    <a
      href="https://play.google.com/store/apps/details?id=com.edstreamchat.app&pcampaignid=web_share"
      target="_blank"
      rel="noopener noreferrer"
      className={`${badgeBox} shrink-0 transition-transform duration-200 hover:scale-105`}
      aria-label="Get EdStream on Google Play"
    >
      <img
        src={GOOGLE_PLAY_BADGE}
        alt="Get it on Google Play"
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </a>
  </div>
);

export default StoreBadges;

const APP_STORE_BADGE = `${import.meta.env.BASE_URL}assets/app-store-badge.svg`;

type AppStoreBadgeProps = {
  className?: string;
};

const AppStoreBadge = ({ className = "h-[60px] w-[200px] object-contain" }: AppStoreBadgeProps) => (
  <img
    src={APP_STORE_BADGE}
    alt="Download on the App Store"
    className={className}
    loading="lazy"
  />
);

export default AppStoreBadge;

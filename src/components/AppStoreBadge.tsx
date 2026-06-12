type AppStoreBadgeProps = {
  className?: string;
};

const AppStoreBadge = ({ className = "h-[60px] w-[200px]" }: AppStoreBadgeProps) => (
  <svg
    className={className}
    viewBox="0 0 119.664 40"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Download on the App Store"
  >
    <rect width="119.664" height="40" rx="6.5" fill="#000" />
    <path
      d="M24.769 20.301c-.033-3.223 2.643-4.787 2.762-4.863-1.502-2.191-3.842-2.488-4.667-2.518-1.987-.2-3.878 1.162-4.885 1.162-.99 0-2.519-1.134-4.144-1.103-2.131.033-4.092 1.238-5.191 3.145-2.213 3.875-.566 9.608 1.588 12.751 1.053 1.532 2.306 3.252 3.953 3.19 1.588-.065 2.186-1.027 4.104-1.027 1.918 0 2.462 1.027 4.147.997 1.715-.033 2.804-1.565 3.848-3.103 1.211-1.768 1.709-3.479 1.736-3.566-.038-.017-3.387-1.3-3.422-5.165zm-3.125-9.531c.888-1.075 1.488-2.571 1.324-4.053-1.28.052-2.827.853-3.744 1.928-.822.953-1.542 2.486-1.348 3.952 1.19.092 2.407-.607 3.768-1.827z"
      fill="#fff"
    />
    <text
      x="42"
      y="14"
      fill="#fff"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      fontSize="8.5"
      letterSpacing="0.02em"
    >
      Download on the
    </text>
    <text
      x="42"
      y="29"
      fill="#fff"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      fontSize="15"
      fontWeight="600"
      letterSpacing="-0.01em"
    >
      App Store
    </text>
  </svg>
);

export default AppStoreBadge;

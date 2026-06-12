type EdStreamLogoProps = {
  className?: string;
};

const EdStreamLogo = ({ className = "h-12 w-12" }: EdStreamLogoProps) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="EdStream Logo"
  >
    <path
      d="M22 15L14 5M12 25L4 15"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      className="text-orange-500 dark:text-orange-400"
    />
    <path
      d="M82 85L92 95M90 75L100 85"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      className="text-orange-500 dark:text-orange-400"
    />
    <path
      d="M25 80C28 72 25 65 20 60C10 50 10 25 35 15C65 5 95 20 90 50C85 80 45 85 25 80Z"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue dark:text-blue-300"
    />
    <circle cx="50" cy="40" r="7" stroke="currentColor" strokeWidth="4" className="text-blue dark:text-blue-300" />
    <path
      d="M36 60C36 50 44 47 50 47C56 47 64 50 64 60"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      className="text-blue dark:text-blue-300"
    />
    <circle cx="30" cy="45" r="5" stroke="currentColor" strokeWidth="4" className="text-blue dark:text-blue-300" />
    <path
      d="M22 60C22 53 26 51 30 51C32 51 34 52 36 54"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      className="text-blue dark:text-blue-300"
    />
    <circle cx="70" cy="45" r="5" stroke="currentColor" strokeWidth="4" className="text-blue dark:text-blue-300" />
    <path
      d="M64 54C66 52 68 51 70 51C74 51 78 53 78 60"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      className="text-blue dark:text-blue-300"
    />
  </svg>
);

export default EdStreamLogo;

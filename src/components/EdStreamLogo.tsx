type EdStreamLogoProps = {
  className?: string;
};

const base = import.meta.env.BASE_URL;
const v = "2026-06-28";

/** Brand mark from official artwork — light/dark PNGs with transparent background. */
const EdStreamLogo = ({ className = "h-12 w-auto" }: EdStreamLogoProps) => (
  <>
    <img
      src={`${base}logo-light.png?v=${v}`}
      alt="EdStream Logo"
      className={`edstream-brand-logo block dark:hidden object-contain ${className}`}
      decoding="async"
    />
    <img
      src={`${base}logo-dark.png?v=${v}`}
      alt="EdStream Logo"
      className={`edstream-brand-logo hidden dark:block object-contain ${className}`}
      decoding="async"
    />
  </>
);

export default EdStreamLogo;

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const resolveIsDark = () => {
      if (theme === "dark") return true;
      if (theme === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    setIsDark(resolveIsDark());

    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setIsDark(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return (
    <div
      className="flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 px-2 py-1"
      role="group"
      aria-label="Theme"
    >
      <Sun
        className={`h-4 w-4 transition-colors ${isDark ? "text-gray-400" : "text-orange-500"}`}
        aria-hidden
      />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      />
      <Moon
        className={`h-4 w-4 transition-colors ${isDark ? "text-blue-400" : "text-gray-400"}`}
        aria-hidden
      />
    </div>
  );
};

export default ThemeToggle;

import { ThemeReturnType, useTheme } from "@lib/context/ThemeContext";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdDarkMode, MdDesktopWindows, MdLightMode } from "react-icons/md";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleOnSelect = (type: ThemeReturnType) => {
    setTheme(type);
    switch (type) {
      case "dark": {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        return;
      }
      case "light": {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        return;
      }
      case "system":
        localStorage.setItem("theme", "system");
        return;
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="flex items-center gap-1 rounded bg-neutral-50 px-2 py-1 text-neutral-700 shadow focus:outline-none dark:bg-neutral-900 dark:text-neutral-300 "
        title={theme}
        data-test="theme-context"
      >
        <ThemeIcon type={theme} className="h-5 w-5" />
        <p className="text-xs capitalize ">{theme}</p>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="mt-3 space-y-1 rounded bg-neutral-50 p-1 text-neutral-700 shadow dark:bg-neutral-900 dark:text-neutral-300"
        align="end"
      >
        <DropdownMenu.Item
          className={`flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-xs  hover:outline-none ${
            theme === "dark"
              ? "bg-neutral-200 dark:bg-neutral-700"
              : "hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
          onClick={() => handleOnSelect("dark")}
          data-test="dark-switch"
        >
          <ThemeIcon type="dark" />
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className={`flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-xs  hover:outline-none ${
            theme === "light"
              ? "bg-neutral-200 dark:bg-neutral-700"
              : "hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
          onClick={() => handleOnSelect("light")}
          data-test="light-switch"
        >
          <ThemeIcon type="light" />
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className={`flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-xs  hover:outline-none ${
            theme === "system"
              ? "bg-neutral-200 dark:bg-neutral-700"
              : "hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
          onSelect={() => handleOnSelect("system")}
          data-test="media-switch"
        >
          <ThemeIcon type="system" />
          System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

const ThemeIcon = ({
  type,
  className = "w-5 h-5",
}: {
  type: ThemeReturnType;
  className?: string;
}) => {
  switch (type) {
    case "dark":
      return <MdDarkMode className={className} />;
    case "light":
      return <MdLightMode className={className} />;
    case "system":
      return <MdDesktopWindows className={className} />;
  }
};

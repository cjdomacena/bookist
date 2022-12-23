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
        document.documentElement.classList.toggle("dark");
        return;
      }
      case "media":
        localStorage.setItem("theme", "media");
        return;
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="focus:outline-none"
        title={theme}
        data-test="theme-context"
      >
        {<ThemeIcon type={theme} className="h-5 w-5" />}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="mt-2 rounded p-1 dark:bg-neutral-900">
        <DropdownMenu.Item
          className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-xs hover:outline-none dark:hover:bg-neutral-700"
          onClick={() => handleOnSelect("dark")}
          data-test="dark-switch"
        >
          <ThemeIcon type="dark" />
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-xs hover:outline-none dark:hover:bg-neutral-700"
          onClick={() => handleOnSelect("light")}
          data-test="light-switch"
        >
          <ThemeIcon type="light" />
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-xs hover:outline-none dark:hover:bg-neutral-700"
          onSelect={() => handleOnSelect("media")}
          data-test="media-switch"
        >
          <ThemeIcon type="media" />
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
    case "media":
      return <MdDesktopWindows className={className} />;
  }
};

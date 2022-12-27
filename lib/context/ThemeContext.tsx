import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
export type ThemeReturnType = "dark" | "light" | "system";
interface IThemeContext {
  theme: ThemeReturnType;
  setTheme: Dispatch<SetStateAction<ThemeReturnType>>;
}

const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeReturnType>("dark");

  const updateThemeonMediaChange = (e: MediaQueryListEvent) => {
    if (e.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      const localStorageKey = localStorage.getItem("theme");
      if (!localStorageKey) {
        if (!isDarkMode.matches) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
          setTheme("light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
          setTheme("dark");
        }
      } else {
        setTheme(localStorageKey as ThemeReturnType);
        if (localStorageKey === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      const localStorageKey = localStorage.getItem("theme");
      if (theme === "system") {
        if (localStorageKey === "system") {
          if (isDarkMode.matches) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }
        isDarkMode.addEventListener("change", updateThemeonMediaChange);
        return () =>
          isDarkMode.removeEventListener("change", updateThemeonMediaChange);
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

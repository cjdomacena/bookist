import Head from "next/head";
import Image from "next/image";
import { Red_Hat_Display } from "@next/font/google";
import { useTheme } from "@lib/context/ThemeContext";
import { ThemeSwitcher } from "@components/button/ThemeSwitcher/ThemeSwitcher";

const inter = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return <></>;
}

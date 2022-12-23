import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useTheme } from "@lib/context/ThemeContext";
import { ThemeSwitcher } from "@components/button/ThemeSwitcher/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
    </>
  );
}

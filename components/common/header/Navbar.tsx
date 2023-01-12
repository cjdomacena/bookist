import { ThemeSwitcher } from "../button";
import { Logo } from "../util/Logo";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full border-b dark:border-b-neutral-800">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="w-fit">
          <Logo />
        </div>
        <ul className="flex items-center gap-2 text-sm">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </div>
  );
};

import { ThemeSwitcher } from "../button";
import { Logo } from "../util/Logo";

export const Navbar = () => {
  return (
    <div className="w-full border-b dark:border-b-neutral-800">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="w-fit">
          <Logo />
        </div>
        <ul className="flex items-center gap-2">
          <li>Hello</li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </div>
  );
};

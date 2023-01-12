import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdArrowForward,
  MdBookmark,
  MdDashboard,
  MdListAlt,
} from "react-icons/md";

export const AsideNav = ({
  className,
  title,
}: {
  className?: string;
  title: string;
}) => {
  const router = useRouter();
  return (
    <aside className={classNames(className, "space-y-2")}>
      <div>
        <h1 className="text-lg">{title}</h1>
      </div>
      <div className="w-full space-y-2 rounded-sm bg-neutral-50 p-1 shadow ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800">
        <h4 className="px-2 pt-2 text-xs text-neutral-400" aria-label="Menu">
          Menu
        </h4>
        <ul className=" space-y-0.5  rounded text-xs">
          <AsidePill
            text="Dashboard"
            icon={<MdDashboard />}
            href="/dashboard"
          />
          <AsidePill
            text="My Listings"
            icon={<MdListAlt />}
            href="/my-listings"
          />
          <AsidePill text="Saved" icon={<MdBookmark />} href="/saved" />
        </ul>
      </div>
      <button
        className="my-2 flex w-full items-center justify-center gap-2 rounded bg-purple-500 py-2 text-xs  text-purple-200 ring-1 ring-purple-800 transition-colors hover:bg-purple-800 dark:bg-purple-900/50 dark:hover:bg-purple-800"
        onClick={() => router.push("/create-new")}
      >
        Create Listing
        <MdArrowForward />
      </button>
    </aside>
  );
};

interface AsidePillProps {
  text: string;
  icon?: JSX.Element;
  href: string;
}

const AsidePill = ({ text, icon, href }: AsidePillProps) => {
  const router = useRouter();
  const isActive = router.pathname.includes(href);
  const defaultStyle = "rounded text-neutral-700 ";
  return (
    <li
      className={classNames(defaultStyle, {
        "bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300": isActive,
        "hover:bg-neutral-300 dark:text-neutral-300 hover:dark:bg-neutral-800":
          !isActive,
      })}
    >
      <Link className="flex w-full items-center gap-1 p-2" href={href}>
        {icon}
        {text}
      </Link>
    </li>
  );
};

import Link from "next/link";
import { MdCollectionsBookmark } from "react-icons/md";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="-tracking-tightest flex items-center gap-1 text-sm font-semibold dark:text-neutral-300"
    >
      <MdCollectionsBookmark className="h-6 w-6" />
      Bookist
    </Link>
  );
};

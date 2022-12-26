import Link from "next/link";
import { MdCollectionsBookmark } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="w-full border-b dark:border-b-neutral-800">
      <nav className="container mx-auto p-4">
        <div className="w-fit">
          <Link
            href="/"
            className="-tracking-tightest flex items-center gap-1 text-sm font-semibold uppercase"
          >
            <MdCollectionsBookmark className="h-6 w-6" />
            Bookist
          </Link>
        </div>
      </nav>
    </div>
  );
};

import { useRouter } from "next/router";
import { MdArrowBack } from "react-icons/md";
import { ThemeSwitcher } from "../button";

interface AuthLayoutProps {
  background?: JSX.Element | JSX.Element[];
  form: JSX.Element | JSX.Element[];
}

export const AuthLayout = ({ background, form }: AuthLayoutProps) => {
  const router = useRouter();
  return (
    <div className="min-w-screen relative min-h-screen overflow-hidden lg:p-0 xl:p-0 2xl:p-0">
      <div className="grid h-full min-h-screen w-full grid-cols-8">
        {background ? (
          background
        ) : (
          <div className="relative col-span-1 hidden h-full w-full rounded-r-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 md:col-span-3  lg:col-span-3 lg:block xl:col-span-5 xl:block 2xl:col-span-5 2xl:block" />
        )}

        <div className="col-span-full grid place-items-center p-4 lg:col-span-5 xl:col-span-3 2xl:col-span-3">
          {form}
        </div>
      </div>
      <div className="absolute top-4 left-4">
        <button
          className="flex items-center gap-1 rounded bg-neutral-900 px-4 py-2 text-sm font-bold "
          onClick={() => router.back()}
        >
          <MdArrowBack />
          Back
        </button>
      </div>
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

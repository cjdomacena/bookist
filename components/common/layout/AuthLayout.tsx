import { ThemeSwitcher } from "../button";

interface AuthLayoutProps {
  background?: JSX.Element | JSX.Element[];
  form: JSX.Element | JSX.Element[];
}

export const AuthLayout = ({ background, form }: AuthLayoutProps) => {
  return (
    <div className="min-w-screen relative min-h-screen overflow-hidden lg:p-0 xl:p-0 2xl:p-0">
      <div className="grid h-full min-h-screen w-full grid-cols-8">
        <div className="relative col-span-5 h-full w-full rounded-r-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />

        <div className="col-span-3 grid place-items-center">{form}</div>
      </div>
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

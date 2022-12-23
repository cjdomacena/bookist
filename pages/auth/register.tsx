import { ThemeSwitcher } from "@components/button/ThemeSwitcher/ThemeSwitcher";
import { DefaultLayout } from "@components/layout/DefaultLayout";
import { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <div className="min-w-screen relative grid min-h-screen place-items-center  p-4 lg:p-0 xl:p-0 2xl:p-0">
      <div className="h-64 w-full max-w-xl rounded border dark:border-neutral-800"></div>
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Register;

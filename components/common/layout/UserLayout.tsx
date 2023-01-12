import React from "react";
import { AsideNav } from "../menu/AsideNav";
import { DefaultLayout } from "./DefaultLayout";

export const UserLayout = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) => {
  return (
    <DefaultLayout>
      <div className="just flex flex-wrap gap-12">
        <AsideNav
          className="w-full  md:max-w-[200px] lg:max-w-[200px] xl:max-w-[200px] 2xl:max-w-[200px]"
          title={title}
        />
        <div className="w-full flex-grow  p-4 md:w-auto lg:w-auto xl:w-auto 2xl:w-auto">
          {children}
        </div>
      </div>
    </DefaultLayout>
  );
};

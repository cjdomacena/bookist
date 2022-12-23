import { PropsWithChildren } from "react";

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="container mx-auto my-8 p-4">{children}</div>;
};

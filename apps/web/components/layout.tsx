import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="my-8 px-4 md:px-0 mx-auto max-w-7xl flex flex-col gap-6">
      <Header />
      <div className="min-h-full mt-12 md:mt-20">{children}</div>
      <Footer />
    </div>
  );
};

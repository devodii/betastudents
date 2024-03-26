import { Wrapper } from "@repo/ui/wrapper";
import * as React from "react";
import { DashboardHeader } from "../../features/dashboard/header";
import { DashboardSideBar } from "../../features/dashboard/side-bar";

export default async function DashboardLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <Wrapper className="mt-12 flex flex-col items-start justify-start gap-6 px-6 md:px-12 overflow-x-hidden">
      <DashboardHeader />

      <div className="flex gap-12 w-full">
        <DashboardSideBar />

        <div className="flex-1 h-full min-h-[80vh] flex items-center justify-center w-full">
          {children}
        </div>
      </div>
    </Wrapper>
  );
}

import { Wrapper } from "@repo/ui/wrapper";
import * as React from "react";
import { DashboardHeader } from "../../features/dashboard/header";
import { DashboardSideBar } from "../../features/dashboard/side-bar";

export default async function DashboardLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <Wrapper className="mt-12  items-start justify-start overflow-x-hidden">
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

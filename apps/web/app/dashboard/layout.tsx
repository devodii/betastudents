import * as React from "react";
import { DashboardSideBar } from "../../features/dashboard/side-bar";
import { Wrapper } from "@repo/ui/wrapper";
import { DashboardHeader } from "../../features/dashboard/header";

export default async function DashboardLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <Wrapper className="mt-12 flex flex-col items-start justify-start gap-6 px-6 md:px-12 overflow-x-hidden">
      <DashboardHeader />

      <div className="flex gap-12">
        <DashboardSideBar />

        <div className="max-h-max flex items-center justify-center">
          {children}
        </div>
      </div>
    </Wrapper>
  );
}

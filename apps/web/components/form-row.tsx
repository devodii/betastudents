import * as React from "react";

export const FormRow = ({ children }: React.PropsWithChildren) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

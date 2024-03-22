import * as React from "react";

import { cn } from "./lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export const Wrapper = ({ children, as: Tag = "div", className }: Props) => {
  return (
    <Tag
      className={cn(
        "container min-h-screen w-screen flex flex-col items-center justify-center mx-auto",
        className
      )}
    >
      {children}
    </Tag>
  );
};

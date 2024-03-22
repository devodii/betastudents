"use client";

import { Button, ButtonProps } from "@repo/ui/button";
import { cn } from "@repo/ui/util";
import { Spinner } from "@phosphor-icons/react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ className, children, ...rest }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn(
        `text-white w-full max-w-[200px] justify-center gap-4 items-center font-semibold ${
          pending ? "cursor-not-allowed" : ""
        }`,
        className
      )}
      aria-disabled={pending}
      type="submit"
      {...rest}
    >
      <span>{children}</span>
      {pending && <Spinner className="animate-spin" size={20} />}
    </Button>
  );
}

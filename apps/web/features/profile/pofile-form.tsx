"use client";

import { Button } from "@repo/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@repo/ui/dialog";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import * as React from "react";
import { createProfile } from "../../actions/profile";
import { SubmitButton } from "../../components/submit-button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  open?: boolean;
  children?: React.ReactNode;
}

export const ProfileForm = ({ children: trigger, open }: Props) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleClearSearchParams = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("createProfile");
    params.delete("handle");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Dialog defaultOpen={open} onOpenChange={handleClearSearchParams}>
      {trigger && (
        <DialogTrigger className="underline underline-offset-2" asChild>
          <Button>{trigger}</Button>
        </DialogTrigger>
      )}

      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>Create a student profile</DialogHeader>
        <DialogDescription>
          Your profile would enable other students connect with you.
        </DialogDescription>

        <form action={createProfile} className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="country">Country: </Label>
            <Input id="country" name="country" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="education_level">Education level: </Label>
            <Input id="education_level" name="education_level" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="school_name">School name: </Label>
            <Input id="school_name" name="school_name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="graduation_year">Graduation year </Label>
            <Input id="graduation_year" name="graduation_year" />
          </div>

          <SubmitButton className="mx-auto">Create profile</SubmitButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};

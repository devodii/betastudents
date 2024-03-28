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
import { EducationLevelComboBox } from "./education-level-combo";
import { CountriesComboBox } from "./country-combo";

interface Props {
  open?: boolean;
  children?: React.ReactNode;
  countries?: any[];
}

export const ProfileForm = ({ children: trigger, open, countries }: Props) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleClearSearchParams = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("createProfile");
    params.delete("handle");
    replace(`${pathname}?${params.toString()}`);
  };

  const nickName = searchParams.get("handle");

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

        <form action={createProfile} className="grid grid-cols-1 gap-6">
          <ProfileFormRow>
            <Label htmlFor="username">Nick name </Label>
            <Input
              id="username"
              name="username"
              defaultValue={nickName!}
              required
            />
          </ProfileFormRow>

          <ProfileFormRow>
            <Label htmlFor="country">🌎 Country </Label>
            {/* <Input id="country" name="country" required /> */}

            <CountriesComboBox countries={countries!} />
          </ProfileFormRow>

          <ProfileFormRow>
            <Label htmlFor="education_level">📚 Education level </Label>
            {/* <Input id="education_level" name="education_level" required /> */}

            <EducationLevelComboBox />
          </ProfileFormRow>

          <ProfileFormRow>
            <Label htmlFor="school_name">🏫 School name </Label>
            <Input id="school_name" name="school_name" />
          </ProfileFormRow>

          <div className="space-y-2">
            <Label htmlFor="graduation_year">🎓 Graduation year </Label>
            <Input id="graduation_year" name="graduation_year" />
          </div>

          <SubmitButton className="mx-auto">Create profile</SubmitButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const ProfileFormRow = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col gap-2">{children}</div>
);

ProfileFormRow.displayName = "ProfileFormRow";

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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createProfile } from "../../actions/profile";
import { uploadImage } from "../../actions/storage";
import { SubmitButton } from "../../components/submit-button";
import useFilePreview from "../../hooks/use-preview-image";
import { imageUrlToFile } from "../../lib/image-transformer";
import { CountriesComboBox } from "./country-combo";
import { educationLevels } from "./education-level";
import { EducationLevelComboBox } from "./education-level-combo";
import { ProfileCreationProps } from "./types";

type SubmitProps = SubmitHandler<ProfileCreationProps>;

interface ProfileFormProps {
  open?: boolean;
  children?: React.ReactNode;
  countries?: any[];
}

export const ProfileForm = ({
  children: trigger,
  open,
  countries,
}: ProfileFormProps) => {
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

  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [educationLevel, setEducationLevel] = React.useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<ProfileCreationProps>();

  const image = watch("photo_url");
  const handle = watch("handle");

  const [filePreview] = useFilePreview(image);

  const handleCreate: SubmitProps = async (data, e: any) => {
    e?.preventDefault();

    const file = await imageUrlToFile(filePreview as string, handle);

    const url = await uploadImage(file, handle);

    createProfile({
      ...data,
      photo_url: url,
      country: selectedCountry,
      education_level: educationLevel,
    });
  };

  return (
    <Dialog defaultOpen={open} onOpenChange={handleClearSearchParams}>
      {trigger && (
        <DialogTrigger className="underline underline-offset-2" asChild>
          <Button>{trigger}</Button>
        </DialogTrigger>
      )}

      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className="max-w-4xl"
      >
        <DialogHeader>Create a student profile</DialogHeader>
        <DialogDescription>
          Your profile would enable other students connect with you.
        </DialogDescription>

        <form
          onSubmit={handleSubmit(handleCreate)}
          className="grid grid-cols-1 gap-6"
        >
          <ProfileFormRow>
            {filePreview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={filePreview as string}
                alt={nickName as string}
                className="rounded-base h-[150px] w-[200px] mx-auto rounded-md object-cover "
              />
            ) : (
              <>
                <Label
                  htmlFor="image"
                  className="bg-gray-300 rounded-md h-[150px] w-full max-w-[200px] mx-auto flex items-center justify-center cursor-pointer"
                >
                  Upload a photo
                </Label>
                <Input
                  {...register("photo_url")}
                  className="hidden"
                  type="file"
                  id="image"
                  accept=".jpg"
                />
              </>
            )}
          </ProfileFormRow>

          <ProfileFormRow>
            <Label htmlFor="handle">👤 Nick name </Label>
            <Input
              id="handle"
              defaultValue={nickName!}
              required
              {...register("handle", {
                pattern: {
                  value: /^@[a-zA-Z0-9_]+$/,
                  message: "nick name must start with @",
                },
              })}
            />

            {errors.handle && (
              <span className="text-red-500">{errors.handle.message}</span>
            )}
          </ProfileFormRow>

          <ProfileFormRow>
            <Label htmlFor="country">🌎 Country </Label>

            <CountriesComboBox
              countries={countries!}
              value={selectedCountry}
              setValue={setSelectedCountry}
            />
          </ProfileFormRow>

          <ProfileFormRow>
            <Label htmlFor="education_level">📚 Education level </Label>

            <EducationLevelComboBox
              educationLevels={educationLevels}
              value={educationLevel}
              setValue={setEducationLevel}
            />
          </ProfileFormRow>

          <ProfileFormRow>
            <Label htmlFor="school_name">🏫 School name </Label>
            <Input id="school_name" {...register("school_name")} />
          </ProfileFormRow>

          <div className="space-y-2">
            <Label htmlFor="graduation_year">🎓 Graduation year </Label>
            <Input
              id="graduation_year"
              placeholder="2024"
              {...register("graduation_year")}
            />
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

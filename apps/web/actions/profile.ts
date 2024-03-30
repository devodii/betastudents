"use server";

import { redirect } from "next/navigation";
import { createClient } from "../lib/server";
import { getUser } from "./user";
import { Profile } from "../features/profile/types";

export const createProfile = async (dto: Profile) => {
  console.log({ dto });
  const user = await getUser();

  if (!user?.data?.user?.id) {
    redirect("/sign-in");
  }

  const supabase = await createClient();

  const { handle } = dto;

  const existingProfile = await getProfile(handle);

  if (existingProfile?.id) {
    redirect(`/${handle}`);
  }

  const { data, error } = await supabase.from("profile").insert({ ...dto });

  // if (error) {
  //   console.log({ error });
  //   // redirect("/error?cat=create-profile");
  // }

  console.log({ error, data });

  // redirect(`/${handle}`);
};

export const getProfile = async (handle: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .match({ handle });

  if (error) {
    return { success: false, message: error.hint };
  }

  return data?.[0];
};

export const mockCreateProfile = async (formdata: FormData) => {
  const handle = formdata.get("handle") as string;

  const user = await getUser();

  if (!user?.data?.user?.id) {
    redirect("/sign-in");
  }

  redirect(`/dashboard?createProfile=true&handle=${handle}`);
};

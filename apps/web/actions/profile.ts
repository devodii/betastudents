"use server";

import { redirect } from "next/navigation";
import { createClient } from "../lib/server";
import { getUser } from "./user";

export const createProfile = async (formdata: FormData) => {
  const user = await getUser();

  if (!user?.data?.user?.id) {
    redirect("/sign-in");
  }

  const supabase = await createClient();

  const dto = Object.fromEntries(formdata) as Record<string, any>;

  const { handle } = dto;

  const existingProfile = await getProfile(handle);

  if (existingProfile?.id) {
    redirect(`/${handle}`);
  }

  const { data, error } = await supabase.from("profile").insert({ ...dto });

  console.log({ error, data });
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

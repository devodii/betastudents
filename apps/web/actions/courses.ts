"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../lib/server";
import { redirect } from "next/navigation";
import { getUser } from "./user";

export const createOutline = async (prevState: any, formdata: FormData) => {
  const dto = Object.fromEntries(formdata);

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("course_outline")
    .insert({ ...dto });

  if (error) {
    return { success: false };
  }

  console.log({ data, error });

  revalidatePath("/dashboard/courses");
  redirect("/dashboard/courses");
};

export const retrieveOutlines = async () => {
  const user = await getUser();

  const userId = user?.data?.user?.id;

  if (!userId) {
    redirect("/sign-in");
  }

  console.log({ userId });
  const supabase = await createClient();

  const { data } = await supabase
    .from("course_outline")
    .select("*")
    .match({ user_id: userId });

  revalidatePath("/dashboard/courses");
  return data ?? [];
};

export const getOutline = async (id: string) => {
  const user = await getUser();

  const userId = user?.data?.user?.id;

  if (!userId) {
    redirect("/sign-in");
  }

  const supabase = await createClient();

  const { data } = await supabase
    .from("course_outline")
    .select("*")
    .match({ id });

  revalidatePath("/dashboard/courses");
  return data?.[0] as Record<string, any>;
};

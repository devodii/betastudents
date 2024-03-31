"use server";

import { redirect } from "next/navigation";
import { createClient } from "../lib/server";
import { revalidatePath } from "next/cache";

export const getUser = async () => {
  const supabase = await createClient();

  return supabase.auth?.getUser();
};

export const signIn = async (formdata: FormData) => {
  const dto = Object.fromEntries(formdata) as Record<string, any>;

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: dto.email,
    password: dto.password,
  });

  if (error) {
    console.log("Error while signing in", { error });
    redirect("/sign-in?error=true");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
};

export const signUp = async (formdata: FormData) => {
  const dto = Object.fromEntries(formdata) as Record<string, any>;

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: dto.email,
    password: dto.password,
  });

  if (error) {
    console.log("Error while signing up", { error });
    redirect("/sign-up?error=true");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
};

export const signOut = async () => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log({ error });
  }

  redirect("/");
};

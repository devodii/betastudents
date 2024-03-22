"use server";

import { createClient } from "../lib/server";

export const createOutline = async (formdata: FormData) => {
  const dto = Object.fromEntries(formdata);

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("course_outline")
    .insert({ ...dto });

  console.log({ data, error });
};

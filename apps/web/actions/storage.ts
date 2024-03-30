"use server";

import { createClient } from "../lib/server";

export const uploadImage = async (image: any, handle: string) => {
  console.log({ image, handle });
  const supabase = await createClient();

  const { data: upload, error: uploadError } = await supabase.storage
    .from("profile")
    .upload(`${handle}.webp`, image, {
      upsert: true,
      contentType: "image/webp",
    });

  console.log({ upload, uploadError });

  const { data } = await supabase.storage
    .from("profile")
    .getPublicUrl("image.png");

  return data.publicUrl;
};

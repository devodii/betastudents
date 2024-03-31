"use client";

import { supabaseClient } from "../lib/client";

export const uploadImage = async (image: any, handle: string) => {
  console.log({ image, handle });

  const { data: upload, error: uploadError } = await supabaseClient.storage
    .from("profile")
    .upload(`${handle}.webp`, image, {
      upsert: true,
      contentType: "image/webp",
    });

  console.log({ upload, uploadError });

  const { data } = await supabaseClient.storage
    .from("profile")
    .getPublicUrl(`${handle}.webp`);

  return data.publicUrl;
};

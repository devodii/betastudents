"use client";

export async function imageUrlToFile(url: string, name: string) {
  try {
    const response = await fetch(url);
    console.log({ response });
    const blob = await response.blob();

    const file = new File([blob], name, { type: blob.type });

    return file;
  } catch (error) {
    console.error("Error converting image URL to File:", error);
    throw error;
  }
}

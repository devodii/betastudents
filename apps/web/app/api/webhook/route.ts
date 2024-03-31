import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseClient } from "../../../lib/client";

async function processEvent(event: any) {
  const data = event.data.attributes;
  if (
    data.status === "paid" &&
    event.meta.event_name.startsWith("order_created")
  ) {
    console.log({ data });
    const { error, data: update } = await supabaseClient.auth.updateUser({
      data: { isSubscribed: true },
    });

    console.log({ update });

    if (error) {
      console.log("An error occured while updating user", error);
    }
  } else {
    console.log(data);
    return "Something went wrong!";
  }
}

async function webhook(request: any) {
  console.log("request came in.");
  const rawBody = await request.text();

  const secret = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_SECRET!;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
  const signature = Buffer.from(
    request.headers.get("X-Signature") || "",
    "utf8"
  );

  if (!crypto.timingSafeEqual(digest, signature)) {
    throw new Error("Invalid signature.");
  }

  const data = JSON.parse(rawBody);

  await processEvent(data);

  return NextResponse.json({ status: 200 });
}

export { webhook as POST };

import crypto from "crypto";
import { getUser } from "../../../actions/user";

export async function POST(req: any) {
  try {
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    // Check signature
    const secret = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_SECRET!;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    // Logic according to event
    if (eventType === "order_created") {
      const userId = body.meta.custom_data?.userId;
      const isSuccessful = body.data.attributes.status === "paid";

      console.log({ userId, isSuccessful });

      const user = await getUser();

      console.log({ user });
    }

    return Response.json({ message: "Webhook received" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}

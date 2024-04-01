"use server";

import { LemonSqueezyApi } from "../lib/lemon-squeezy";
import { getUser } from "./user";

export const createCheckoutUrl = async () => {
  try {
    const user = await getUser();

    const response = await LemonSqueezyApi.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            custom: {
              userId: user?.data?.user?.id.toString(),
            },
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STORE_ID?.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",
              id: process.env.NEXT_PUBLIC_LEMON_SQUEEZY_PRODUCT_ID?.toString(),
            },
          },
        },
      },
    });

    const checkoutUrl = response.data?.data?.attributes?.url;

    console.log({ checkoutUrl });
    return checkoutUrl;
  } catch (error) {
    console.log("An error occured while generating checkout URL", error);
  }
};

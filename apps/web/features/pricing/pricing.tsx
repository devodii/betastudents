"use client";

import { Crown, Lightning, Spinner } from "@phosphor-icons/react";
import { Button } from "@repo/ui/button";
import { Wrapper } from "@repo/ui/wrapper";
import * as React from "react";
import { createCheckoutUrl } from "../../actions/payments";

export const PricingComp = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGenerateUrl = async () => {
    setIsLoading(true);
    const url = await createCheckoutUrl();
    setIsLoading(false);
    window.open(url, "_blank");
  };

  return (
    <Wrapper className="w-full flex-col">
      <h2 className="text-3xl md:text-4xl font-semibold">Pricing</h2>

      <div className="border rounded-md px-12 py-6 mt-12 w-full max-w-md">
        <div className="flex justify-evenly items-center w-full">
          <div className="flex gap-2 items-center justify-center">
            <p className="text-center text-xl md:text-2xl font-medium">Pro</p>
            <Crown className="text-black" size={30} />
          </div>

          <span className="text-semibold text-2xl">$60</span>
        </div>

        <ul className="grid grid-rows-1 gap-4 mt-6 mb-3">
          <li className="text-xl text-center">get lifetime access</li>
        </ul>

        <div>
          <Button
            className="h-12 w-full flex items-center gap-4 bg-black text-white"
            onClick={handleGenerateUrl}
          >
            <Lightning size={24} />
            <span className="md:text-xl">Get BetaStudents</span>

            {isLoading && <Spinner className="animate-spin" size={24} />}
          </Button>

          <p className="text-gray-600 text-center w-full mt-1">
            Pay once, use it forever
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

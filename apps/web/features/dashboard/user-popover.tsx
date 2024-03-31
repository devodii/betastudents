"use client";

import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@repo/ui/popover";
import { Button } from "@repo/ui/button";
import { signOut } from "../../actions/user";

export const UserPopOver = ({ children: trigger }: React.PropsWithChildren) => {
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>

      <PopoverContent>
        <div className="w-full grid grid-cols-1 gap-3 divide-x">
          <Button variant="outline">My Profile</Button>

          <form action={signOut} className="w-full">
            <input className="hidden" />
            <Button variant="outline" type="submit" className="w-full">
              Logout
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

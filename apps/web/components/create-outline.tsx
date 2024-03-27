"use client";

import { Button } from "@repo/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/dialog";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { Textarea } from "@repo/ui/textarea";
import * as React from "react";
import { useFormState } from "react-dom";
import { createOutline } from "../actions/courses";
import { SubmitButton } from "./submit-button";

const initialState = { success: true };

export const CreateOutline = ({
  children: trigger,
}: React.PropsWithChildren) => {
  const [{ success }, action] = useFormState(createOutline, initialState);
  return (
    <>
      <Dialog>
        <DialogTrigger className="underline underline-offset-2" asChild>
          <Button>{trigger}</Button>
        </DialogTrigger>

        <DialogContent onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Create a course outline</DialogTitle>
          </DialogHeader>

          <form
            className="flex w-full max-w-[800px] flex-col gap-5"
            action={action}
          >
            <div className="space-y-2">
              <Label htmlFor="title">Title: </Label>
              <Input id="title" name="title" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Outline: </Label>
              <Textarea
                id="content"
                name="content"
                required
                rows={10}
                cols={5}
              />
            </div>

            <SubmitButton className="ml-auto">Create</SubmitButton>
          </form>
        </DialogContent>
      </Dialog>

      {/* todo: use success state */}
    </>
  );
};

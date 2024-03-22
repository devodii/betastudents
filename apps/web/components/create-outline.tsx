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
import { createOutline } from "../actions/course-outline";
import { SubmitButton } from "./submit-button";

export const CreateOutline = () => {
  return (
    <Dialog>
      <DialogTrigger className="underline underline-offset-2">
        <Button>Create outline</Button>
      </DialogTrigger>

      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create a course outline</DialogTitle>
        </DialogHeader>

        <form
          className="flex w-full max-w-[800px] flex-col gap-5"
          action={createOutline}
        >
          <div className="space-y-2">
            <Label htmlFor="title">Title: </Label>
            <Input id="title" name="title" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="outline">Outline: </Label>
            <Textarea id="outline" name="outline" required rows={10} cols={5} />
          </div>

          <SubmitButton className="ml-auto">Create</SubmitButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};

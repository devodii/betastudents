import { Button } from "@repo/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@repo/ui/dialog";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { Textarea } from "@repo/ui/textarea";
import * as React from "react";
import { FormRow } from "../../components/form-row";

interface Props {
  open?: boolean;
  children?: React.ReactNode;
}

export const CreateHikingSession = ({ children: trigger, open }: Props) => {
  const action = async () => {
    "use server";
    console.log("Attempt to submit form");
  };

  return (
    <Dialog defaultOpen={open}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <DialogContent className="w-screen max-w-4xl">
        <form className="grid grid-cols-1 gap-5" action={action}>
          <FormRow>
            <Label>Title</Label>
            <Input />
          </FormRow>

          <FormRow>
            <Label>Details</Label>
            <Textarea placeholder="The walk is entirely free of charge.." />
          </FormRow>

          <FormRow>
            <Label>Start time</Label>
            <Input placeholder="Tomorrow" />
          </FormRow>

          <FormRow>
            <Label>Duration</Label>
            <Input placeholder="30 minutes.." />
          </FormRow>

          <Button className="bg-red-500 hover:bg-red-400 mx-auto max-w-sm w-full font-semibold">
            create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

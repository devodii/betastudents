"use client";

import * as React from "react";
import { Check, CaretUp } from "@phosphor-icons/react";
import { cn } from "@repo/ui/util";
import { Button } from "@repo/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@repo/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@repo/ui/popover";

interface Props {
  educationLevels: any[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const EducationLevelComboBox = ({
  educationLevels,
  value,
  setValue,
}: Props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[350px] justify-between text-black"
        >
          {value
            ? educationLevels.find((level) => level?.value === value)?.label
            : "Select level..."}
          <CaretUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0">
        <Command>
          <CommandInput placeholder="Search level..." />
          <CommandEmpty>Level not found.</CommandEmpty>
          <CommandGroup>
            {educationLevels?.map((level) => (
              <CommandItem
                key={level?.value}
                value={level.value}
                onSelect={(currentValue: any) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === level.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {level?.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

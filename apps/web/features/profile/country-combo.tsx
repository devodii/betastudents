"use client";

import { CaretUp, Check } from "@phosphor-icons/react";
import { Button } from "@repo/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@repo/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@repo/ui/popover";
import { cn } from "@repo/ui/util";
import * as React from "react";

interface Country {
  name: string;
}

interface Props {
  countries: any[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const CountriesComboBox = ({
  countries: countriesArray,
  value,
  setValue,
}: Props) => {
  const [open, setOpen] = React.useState(false);

  const countries: Country[] = countriesArray.reduce((acc, country) => {
    const name = country.name.common;

    acc.push({ name });
    return acc;
  }, []);

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
            ? countries.find((country) => country?.name === value)?.name
            : "Select country..."}
          <CaretUp className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[350px] p-0 overflow-y-scroll max-h-[300px]"
        id="country"
      >
        <Command>
          <CommandInput placeholder="Search level..." />
          <CommandEmpty>Country not found.</CommandEmpty>
          <CommandGroup>
            {countries?.map((country) => (
              <CommandItem
                key={country?.name}
                value={country.name}
                onSelect={(currentValue: any) => {
                  setValue(currentValue === value ? "" : country.name);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === country.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {country?.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

import { cn } from "./lib/utils";

type Variant = "row" | "col";

interface Props {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
}

const getVariant = (variant: Variant) => {
  switch (variant) {
    case "col":
      return "flex-col gap-6";
    case "row":
      return "flex-row gap-4";
  }
};

export const Wrapper = ({
  children,
  as: Tag = "div",
  className,
  variant = "col",
}: Props) => {
  return (
    <Tag
      className={cn(
        "container min-h-screen w-screen flex flex-col items-center justify-center mx-auto",
        getVariant(variant),
        className
      )}
    >
      {children}
    </Tag>
  );
};

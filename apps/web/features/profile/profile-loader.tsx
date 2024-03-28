import { Skeleton } from "@repo/ui/skeleton";
import { Wrapper } from "@repo/ui/wrapper";

export const ProfileLoader = () => {
  return (
    <Wrapper className="justify-start mt-12">
      <Skeleton className="size-44 rounded-md bg-gray-200" />

      <div className="mx-auto grid w-full max-w-xl grid-cols-1 gap-4">
        {Array.from({ length: 4 }, (_item, idx) => (
          <Skeleton key={idx} className="h-4 w-full rounded-md bg-gray-200" />
        ))}
      </div>
    </Wrapper>
  );
};

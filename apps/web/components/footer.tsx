import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 items-center justify-center mx-auto fixed bottom-4 w-full max-w-7xl">
      <p className="text-xl font-medium">Products</p>
      <Link href={"/hiking"} className="underline underline-offset-2">
        Hiking for Students
      </Link>
    </footer>
  );
};

import { Skeleton } from "@repo/ui/skeleton";
import Link from "next/link";
import { getUser } from "../actions/user";

export default async function Page() {
  const user = await getUser();

  const hasSession = user?.data?.user?.id;

  return (
    <div className="my-8 px-12 md:px-24 mx-auto max-w-7xl flex flex-col gap-6">
      <header className="w-full flex items-center justify-between">
        <b className="text-2xl font-medium">Beta Students</b>

        <nav>
          <ul className="flex gap-2">
            {hasSession ? (
              <li>
                <Link
                  href={"/dashboard"}
                  className="underline underline-offset-2"
                >
                  dashboard
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href={"/sign-in"}
                    className="underline underline-offset-2"
                  >
                    sign in
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/sign-up"}
                    className="underline underline-offset-2"
                  >
                    sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>

      <p className="text-xl text-center mt-12">
        Beta Students is a platform where students help each other learn
        effectively from all around the world. ❤️
      </p>

      <div className="space-y-1">
        <h4 className="text-3xl font-semibold">Course Outlines</h4>
        <p className="text-gray-900">
          Browse course outlines posted by other students
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          {Array.from({ length: 3 }, (_item, idx) => (
            <li key={idx}>
              <Skeleton className="w-full h-48 rounded-md bg-gray-300" />
            </li>
          ))}
        </ul>
      </div>
      <footer className="flex flex-col gap-2 items-center justify-center mx-auto fixed bottom-4 w-full max-w-5xl">
        <p className="text-xl font-medium">Products</p>
        <Link
          href={"/apps/outline-gen"}
          className="underline underline-offset-2"
        >
          Course outline generator
        </Link>
      </footer>
    </div>
  );
}

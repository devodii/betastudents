import Link from "next/link";
import { getUser } from "../actions/user";

export const Header = async () => {
  const user = await getUser();

  const hasSession = user?.data?.user?.id;

  return (
    <header className="w-full flex items-center justify-between fixed top-12 max-w-7xl">
      <b className="text-2xl font-medium">Beta Students</b>

      <nav>
        <ul className="flex gap-2">
          {hasSession ? (
            <>
              <li>
                <Link
                  href={"/dashboard"}
                  className="underline underline-offset-2"
                >
                  dashboard
                </Link>
              </li>
              <li>
                <Link
                  href={"/pricing"}
                  className="underline underline-offset-2"
                >
                  pricing
                </Link>
              </li>
            </>
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

              <li>
                <Link
                  href={"/pricing"}
                  className="underline underline-offset-2"
                >
                  pricing
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

import Link from "next/link";
import { getUser } from "../actions/user";
import { SemiProfileForm } from "../features/profile/semi-profile-form";

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

      <div className="space-y-2 my-4 md:my-6 max-w-xl mx-auto">
        <div className="text-[3.125rem] font-semibold text-center">
          Easy Studying Ahead.
        </div>

        <div className="text-gray-800 text-center">
          BetaStudents is your education platform for learning effectively by
          creating course schedules, connect with students around the world -
          and so much more
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center w-full max-w-2xl mx-auto">
        <span className="text-[14.5px] text-gray-700">create my page</span>

        <SemiProfileForm />
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

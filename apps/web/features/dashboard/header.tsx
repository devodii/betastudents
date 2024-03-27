import Link from "next/link";
import { getUser } from "../../actions/user";

export const DashboardHeader = async () => {
  const user = await getUser();

  const userEmailInitial = user?.data?.user?.email?.slice(0, 1);
  return (
    <header className="container flex items-center justify-between border-b pb-4">
      <Link href={"/dashboard"} className="text-xl font-medium">
        BetaStudents
      </Link>

      <div className="flex items-center justify-center size-12 rounded-full text-black border font-semibold uppercase text-2xl">
        {userEmailInitial}
      </div>
    </header>
  );
};
import Link from "next/link";

export const DashboardSideBar = () => {
  return (
    <nav className="flex flex-col gap-4 w-52">
      <ul>
        <li>
          <Link
            href={"/dashboard/courses"}
            className="active:underline active:underline-offset-2"
          >
            My Courses
          </Link>
        </li>
      </ul>
    </nav>
  );
};

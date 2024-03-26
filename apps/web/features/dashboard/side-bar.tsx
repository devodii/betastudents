import Link from "next/link";

export const DashboardSideBar = () => {
  return (
    <nav className="w-52">
      <ul className="grid grid-cols-1 gap-4">
        <li>
          <Link
            href={"/dashboard"}
            className="active:underline active:underline-offset-2"
          >
            Home
          </Link>
        </li>
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

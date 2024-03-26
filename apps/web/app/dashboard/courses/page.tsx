import Link from "next/link";
import { retrieveOutlines } from "../../../actions/courses";

export default async function CoursesPage() {
  const outlines = await retrieveOutlines();

  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
      These are your course outlines
      <ul className="grid grid-cols-1 gap-2">
        {outlines.map((outline) => (
          <li key={outline.id}>
            <Link
              href={`/dashboard/courses/${outline.id}`}
              className="underline underline-offset-2"
            >
              {outline.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

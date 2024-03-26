import { CreateOutline } from "../../components/create-outline";

export default async function DashboardPage() {
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
      <p className="text-xl "> It&apos;s a bit empty here</p>
      <p className="text-xl">
        Get started by creating a course outline for your self
      </p>

      <CreateOutline>Create a course outline</CreateOutline>
    </div>
  );
}

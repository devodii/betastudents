import { getCountries } from "../../actions/external";
import { CreateOutline } from "../../components/create-outline";
import { ProfileForm } from "../../features/profile/pofile-form";

interface Props {
  searchParams: {
    createProfile?: string;
    handle?: string;
  };
}

export default async function DashboardPage({ searchParams }: Props) {
  const countries = await getCountries();

  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
      <p className="text-xl "> It&apos;s a bit empty here</p>
      <p className="text-xl">
        Get started by creating a course outline for your self
      </p>

      <CreateOutline>Create a course outline</CreateOutline>

      {searchParams?.createProfile && (
        <ProfileForm open countries={countries} />
      )}
    </div>
  );
}

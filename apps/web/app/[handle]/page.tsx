import { Wrapper } from "@repo/ui/wrapper";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProfile } from "../../actions/profile";
import { educationLevels } from "../../features/profile/education-level";
import { Profile } from "../../features/profile/types";

interface Props {
  params: {
    handle: string;
  };
}

export default async function ProfilePage({ params }: Props) {
  const profile: Profile = await getProfile(decodeURIComponent(params.handle));

  if (!profile?.id) return notFound();

  return (
    <Wrapper className="items-start max-w-2xl gap-2 px-6 md:px-12">
      <div className="relative h-[400px] w-full max-w-[300px] rounded-md mb-4">
        <Image
          fill
          src={profile.photo_url}
          className="rounded-md object-cover"
          alt={`${profile.handle} on BetaStudents`}
          unoptimized={true}
        />
      </div>
      <p>👤 Name: {profile.handle}</p>
      <p>🌎 Country: {profile.country}</p>
      <p>
        📚 Education level:{" "}
        {
          educationLevels.find(
            (level) => level.value === profile.education_level
          )?.label
        }
      </p>
      <p>🏫 School name: {profile.school_name}</p>
    </Wrapper>
  );
}

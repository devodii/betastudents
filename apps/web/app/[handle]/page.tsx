import { Wrapper } from "@repo/ui/wrapper";
import { getProfile } from "../../actions/profile";
import { notFound } from "next/navigation";
import { educationLevels } from "../../features/profile/education-level";

interface Props {
  params: {
    handle: string;
  };
}

export default async function ProfilePage({ params }: Props) {
  const profile = await getProfile(decodeURIComponent(params.handle));

  if (!profile?.id) return notFound();

  return (
    <Wrapper className="items-start max-w-2xl gap-2">
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

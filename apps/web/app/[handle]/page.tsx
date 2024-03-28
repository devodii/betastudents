import { Wrapper } from "@repo/ui/wrapper";

interface Props {
  params: {
    handle: string;
  };
}

export default function ProfilePage({ params }: Props) {
  return <Wrapper>{params.handle}</Wrapper>;
}

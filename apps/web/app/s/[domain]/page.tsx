import { Wrapper } from "@repo/ui/wrapper";

interface Props {
  params: {
    domain: string;
  };
}
export default function DomainPage({ params }: Props) {
  return <Wrapper>{params.domain}</Wrapper>;
}

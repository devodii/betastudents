import { Wrapper } from "@repo/ui/wrapper";
import { getUser } from "../../actions/user";
import { CreateOutline } from "../../components/create-outline";
import { DashboardHeader } from "../../features/dashboard/header";

export default async function DashboardPage() {
  const user = await getUser();

  return (
    <Wrapper className="flex-col items-start justify-start my-12">
      <div>Logged in as: {user?.data?.user?.email}</div>

      <CreateOutline />
    </Wrapper>
  );
}

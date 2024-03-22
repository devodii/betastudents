import { Wrapper } from "@repo/ui/wrapper";
import { getUser } from "../../actions/user";
import { CreateOutline } from "../../components/create-outline";

export default async function DashboardPage() {
  const user = await getUser();

  return (
    <Wrapper>
      <div>Logged in as: {user?.data?.user?.email}</div>

      <CreateOutline />
    </Wrapper>
  );
}

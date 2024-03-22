import { Wrapper } from "@repo/ui/wrapper";
import { getUser } from "../../actions/user";

export default async function DashboardPage() {
  const user = await getUser();

  return (
    <Wrapper>
      <div>Logged in as: {user?.data?.user?.email}</div>
    </Wrapper>
  );
}

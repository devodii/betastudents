import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { Wrapper } from "@repo/ui/wrapper";
import Link from "next/link";
import { SubmitButton } from "../../../components/submit-button";

export default function SignInPage() {
  async function signIn(formdata: FormData) {
    "use server";
    console.log({ formdata });
  }

  return (
    <Wrapper>
      <h2 className="font-semibold text-2xl md:text-3xl">Sign in</h2>
      <form
        action={signIn}
        className="w-full max-w-4xl mx-auto flex flex-col gap-6"
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" required />
        </div>

        <div className="flex items-center justify-end">
          <SubmitButton>Sign in</SubmitButton>
        </div>
      </form>

      <div className="mt-12">
        already have an account?
        <Link
          className="underline underline-offset-2 ml-1 cursor-pointer"
          href={"/sign-in"}
        >
          sign in
        </Link>
      </div>
    </Wrapper>
  );
}

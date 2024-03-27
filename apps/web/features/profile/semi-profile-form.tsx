import { Input } from "@repo/ui/input";
import { SubmitButton } from "../../components/submit-button";
import { mockCreateProfile } from "../../actions/profile";

export const SemiProfileForm = () => {
  return (
    <form
      className="w-full flex-col sm:flex-row flex items-center  gap-2 justify-center"
      action={mockCreateProfile}
    >
      <Input className="flex-1" name="handle" />
      <SubmitButton className="py-5 w-full sm:max-w-40">create</SubmitButton>
    </form>
  );
};

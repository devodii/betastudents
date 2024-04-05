import { SemiProfileForm } from "../features/profile/semi-profile-form";

export default async function Page() {
  return (
    <>
      <div className="space-y-2 my-4 md:my-6 max-w-xl mx-auto mt-12 ">
        <div className="text-[3.125rem] font-semibold text-center">
          Easy Studying Ahead.
        </div>

        <div className="text-gray-800 text-center">
          BetaStudents is your education platform for learning effectively by
          creating course schedules, connect with students around the world -
          and so much more
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center w-full max-w-2xl mx-auto">
        <span className="text-[14.5px] text-gray-700">create my page</span>

        <SemiProfileForm />
      </div>
    </>
  );
}

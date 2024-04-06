import { Button } from "@repo/ui/button";
import { CreateHikingSession } from "./create-hiking-session";

export default function HikingPage() {
  return (
    <div className="mt-12 flex flex-col gap-6">
      <div className="text-[3.125rem] font-medium text-center">Hiking</div>

      <p className="text-gray-800 text-xl text-center max-w-5xl mx-auto">
        Meet other local hiking enthusiasts! All those who are dedicated to
        hiking excursions near and far, with a focus on leaving no trace of
        litter on our lands.
      </p>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 h-96">
        {Array.from({ length: 4 }, (_, idx) => (
          <li key={idx} className="h-full border rounded-md"></li>
        ))}
      </ul>

      <CreateHikingSession>
        <Button className="max-w-[400px] py-6 mx-auto text-lg">
          Create a hiking session
        </Button>
      </CreateHikingSession>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Title from "@/components/Title";
import PollCardPreview from "@/components/PollCardPreview";

export default function Home() {
  const router = useRouter();

  function onNewPoll(): void {
    router.push(`/new-poll`);
  }

  return (
    <main className="md:w-4/5 2xl:w-2/3 pt-28">
      <div>
        <div className="mb-8">
          <Title title="Homepage" />
        </div>

        <div className="mb-8">
          <Button text="New poll" onClick={onNewPoll} />
        </div>

        <div className="flex flex-wrap">
          <div className="mr-4 mb-3">
            <PollCardPreview
              id={1}
              title="adssdadasaaaaaaaaaaaaaaaaaaaaaaaaaa"
              startDate="2024-10-20 18:00:00"
              endDate="2024-10-20 20:00:00"
            />
          </div>
          
          <div className="mr-4 mb-3">
            <PollCardPreview
              id={1}
              title="adssdadasaaaaaaaaaaaaaaaaaaaaaaaaaa"
              startDate="2024-10-20 18:00:00"
              endDate="2025-10-20 18:00:00"
            />
          </div>

          <div className="mr-4 mb-3">
            <PollCardPreview
              id={1}
              title="adssdadasaaaaaaaaaaaaaaaaaaaaaaaaaa"
              startDate="2024-10-20 18:00:00"
              endDate="2025-10-20 18:00:00"
            />
          </div>

          <div className="mr-4 mb-3">
            <PollCardPreview
              id={1}
              title="adssdadasaaaaaaaaaaaaaaaaaaaaaaaaaa"
              startDate="2024-10-20 18:00:00"
              endDate="2025-10-20 18:00:00"
            />
          </div>

          <div className="mr-4 mb-3">
            <PollCardPreview
              id={1}
              title="adssdadasaaaaaaaaaaaaaaaaaaaaaaaaaa"
              startDate="2024-12-20 18:00:00"
              endDate="2024-12-22 18:00:00"
            />
          </div>

          <div className="mr-4 mb-3">
            <PollCardPreview
              id={1}
              title="adssdadasaaaaaaaaaaaaaaaaaaaaaaaaaa"
              startDate="2024-10-20 18:00:00"
              endDate="2025-10-20 18:00:00"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

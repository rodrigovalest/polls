"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import PollCardPreview from "@/components/PollCardPreview";
import Title from "@/components/Title";

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
              startDate="asdasddsa"
              endDate="adsasddsa"
            />
          </div>
          
          <div className="mr-4 mb-3">
            <PollCardPreview
              id={1}
              title="adssdadasaaaaaaaaaaaaaaaaaaaaaaaaaa"
              startDate="asdasddsa"
              endDate="adsasddsa"
            />
          </div>

          <div className="mr-4 mb-3">
            <PollCardPreview
              id={1}
              title="adssdadasaaaaaaaaaaaaaaaaaaaaaaaaaa"
              startDate="asdasddsa"
              endDate="adsasddsa"
            />
          </div>

          <div className="mr-4 mb-3">
            <PollCardPreview
              id={1}
              title="adssdadasaaaaaaaaaaaaaaaaaaaaaaaaaa"
              startDate="asdasddsa"
              endDate="adsasddsa"
            />
          </div>

          <div className="mr-4 mb-3">
            <PollCardPreview
              id={1}
              title="adssdadasaaaaaaaaaaaaaaaaaaaaaaaaaa"
              startDate="asdasddsa"
              endDate="adsasddsa"
            />
          </div>

          <div className="mr-4 mb-3">
            <PollCardPreview
              id={1}
              title="adssdadasaaaaaaaaaaaaaaaaaaaaaaaaaa"
              startDate="asdasddsa"
              endDate="adsasddsa"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

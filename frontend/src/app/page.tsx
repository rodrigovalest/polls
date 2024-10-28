"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Title from "@/components/Title";
import PollCardPreview from "@/components/PollCardPreview";
import { useAllPollsData } from "@/hooks/useAllPollsData";
import { IPoll } from "@/models/entities/IPoll";

export default function Home() {
  const router = useRouter();
  const { data, isLoading, error } = useAllPollsData();

  function onNewPoll(): void {
    router.push(`/new-poll`);
  }

  if (isLoading) 
    return <p className="font-MonaSans text-lg font-medium">Loading...</p>;

  if (error) 
    return <p className="font-MonaSans text-lg font-medium">Error loading data</p>;

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
          {data?.map((poll: IPoll) => (
            <div className="mr-4 mb-3" key={poll.id}>
              <PollCardPreview
                id={poll.id}
                title={poll.title}
                startDate={poll.start_date}
                endDate={poll.end_date}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

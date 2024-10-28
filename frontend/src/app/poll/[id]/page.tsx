"use client";

import Button from "@/components/Button";
import Loading from "@/components/Loading";
import StatusIcon from "@/components/StatusIcon";
import Title from "@/components/Title";
import { useDeletePollMutate } from "@/hooks/useDeletePollMutate";
import { usePollData } from "@/hooks/usePollData";
import { usePollVoteMutate } from "@/hooks/usePollVoteMutate";
import { IVoteRequest } from "@/models/request/IVoteRequest";
import { isActive } from "@/services/DateService";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IPollProps {
  params: { id: string }
}

export default function Poll({ 
  params 
}: IPollProps) {
  const router = useRouter();
  const [ hasVoted, setHasVoted ] = useState<boolean>(false);
  const { data, isLoading, error } = usePollData(params.id, 1000);
  const { pollVoteMutate } = usePollVoteMutate();
  const { deletePollMutate } = useDeletePollMutate();

  function goToHomepage() {
    router.push("/");
  }

  function doVote(optionId: number) {
    const data: IVoteRequest = { option_id: optionId };
    pollVoteMutate.mutate(
      { pollId: params.id, voteData: data },
      {
        onSuccess: () => setHasVoted(true),
        onError: () => alert("Error registering vote. Try again.")
      }
    );
  }

  function updatePoll() {
    router.push(`${params.id}/update`);
  }

  function deletePoll() {
    if (!confirm("Are you sure you want to delete this poll?"))
      return;

    deletePollMutate.mutate(
      params.id, 
      {
        onSuccess: () => router.push("/"),
        onError: () => alert("Error deleting poll. Please try again.")
      })
  }

  if (isLoading) 
    return <Loading />

  if (error)
    return <p className="font-MonaSans text-lg font-medium">Error loading data</p>;

  return (
    <div className="w-11/12 xl:w-2/3 2xl:w-1/2">
      <div className="flex justify-between items-center mb-7">
        <Title title={data!.title} />

        <StatusIcon startDate={data!.start_date} endDate={data!.end_date} />
      </div>

      <div className="mb-8">
        <div className="inline-block mr-1">
          <Button text="Homepage" onClick={goToHomepage} />
        </div>
        
        <div className="inline-block mr-1">
          <Button text="Update poll" onClick={updatePoll} />
        </div>
        
        <div className="inline-block">
          <Button text="Delete poll" onClick={deletePoll} />
        </div>
      </div>

      <div className="bg-appWhite border rounded-2xl shadow-md w-full py-6">
        {data?.options.map((option) => (
          <div className="mb-5 px-10" key={option.id}>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-MonaSans text-lg font-medium inline-block mr-3">
                  {option.description}
                </p>
                <p className="font-MonaSans text-lg font-medium inline-block">
                  {option.vote_count}
                </p>
              </div>
              
              <Button
                text="Vote" 
                onClick={() => doVote(option.id)} isActive={isActive(data.start_date, data.end_date)}
                isActive={!hasVoted}  
              />
            </div>
          </div>
        ))}

        <div className="border-appGray border-t-2 px-10 py-6">
          <p className="font-MonaSans font-regular text-base text-appBlack mt-2 mb-4">
            Start date: {data!.start_date}
          </p>
          
          <p className="font-MonaSans font-regular text-base text-appBlack">
            End date: {data!.end_date}
          </p>
        </div> 
      </div>
    </div>
  );
}

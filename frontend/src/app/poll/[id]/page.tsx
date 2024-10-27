"use client";

import Button from "@/components/Button";
import StatusIcon from "@/components/StatusIcon";
import Title from "@/components/Title";
import { environment } from "@/environment/environment";
import { IPoll } from "@/models/entities/IPoll";
import { isActive } from "@/services/DateService";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IPollProps {
  params: { id: string }
}

export default function Poll({ 
  params 
}: IPollProps) {
  const router = useRouter();
  const { data, isLoading, error } = useQuery<IPoll>({
    queryKey: ['poll', params.id],
    queryFn: async () => {
      try {
        const response = await axios.get(`${environment.httpApiUrl}/api/polls/${params.id}`);
        console.log("start date", response.data.data.start_date);
        console.log("end date", response.data.data.end_date);
        return response.data.data;
      } catch (err) {
        if (err.response && err.response.status === 404)
          router.push('/not-found');
        throw err;
      }
    },
  });

  function goToHomepage() {
    router.push('/');
  }

  function doVote() {

  }

  function calculatePercentage(): number {
    return 1;
  }

  if (isLoading) return <p>Loading...</p>;
  
  if (error) return <p>Error loading data</p>;

  return (
    <div className="w-11/12 xl:w-2/3 2xl:w-1/2">
      <div className="flex justify-between items-center mb-7">
        <Title title={data!.title} />

        <StatusIcon startDate={data!.start_date} endDate={data!.end_date} />
      </div>

      <div className="mb-8">
        <Button text="Homepage" onClick={goToHomepage} />
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
              
              <Button text="Vote" onClick={doVote} isActive={isActive(data.start_date, data.end_date)} />
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

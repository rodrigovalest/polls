"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

interface IPollCardPreviewProps {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
}

export default function PollCardPreview({
  id,
  title,
  startDate,
  endDate,
}: IPollCardPreviewProps) {
  const router = useRouter();

  function isActive(): boolean {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    return now >= start && now <= end;
  }

  function onSeePoll(): void {
    router.push(`/poll/${id}`);
  }

  const truncatedTitle = title.length > 20 ? `${title.slice(0, 12)}...` : title;

  return (
    <div className="inline-block bg-appWhite border rounded-2xl shadow-md w-[320px]">
      <div className="flex justify-between items-center border-b-appGray border-b-2 px-5 py-4">
        <p className="font-MonaSans font-bold text-xl text-appBlack">
          {truncatedTitle}
        </p>

        <span className={`py-[5px] px-6 rounded-full border-2 ${isActive() ? 'text-appGreen border-appGreen' : 'text-appRed border-appRed'}`}>
          {isActive() ? 'Active' : 'Inactive'}
        </span>
      </div>

      <div className="px-5 py-5">
        <p className="font-MonaSans font-regular text-base text-appBlack mb-2">
          Start date: {startDate}
        </p>
        
        <p className="font-MonaSans font-regular text-base text-appBlack mb-5">
          End date: {endDate}
        </p>

        <Button text="See poll" onClick={onSeePoll} />
      </div>
    </div>
  );
}

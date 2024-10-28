"use client";

import { getPollStatus } from "@/services/DateService";

interface IStatusIcon {
  startDate: string;
  endDate: string;
}

export default function StatusIcon({ startDate, endDate }: IStatusIcon) {
  const status = getPollStatus(startDate, endDate);

  const statusStyles = {
    ACTIVE: "text-appGreen border-appGreen",
    NOT_STARTED: "text-appRed border-appRed",
    COMPLETED: "text-appRed border-appRed",
  };

  const statusText = {
    ACTIVE: "Active",
    NOT_STARTED: "Inactive",
    COMPLETED: "Completed",
  };

  return (
    <span
      className={`py-[5px] px-6 rounded-full border-2 ${statusStyles[status]}`}
    >
      {statusText[status]}
    </span>
  );
}

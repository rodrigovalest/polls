"use client";

import { isActive } from "@/services/DateService";

interface IStatusIcon {
  startDate: string;
  endDate: string;
}

export default function StatusIcon({ startDate, endDate }: IStatusIcon) {
  return (
    <span
      className={`py-[5px] px-6 rounded-full border-2 ${
        isActive(startDate, endDate)
          ? "text-appGreen border-appGreen"
          : "text-appRed border-appRed"
      }`}
    >
      {isActive(startDate, endDate) ? "Active" : "Inactive"}
    </span>
  );
}

"use client";

interface IPollCardProps {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
}

export default function PollCard({
  id,
  title,
  startDate,
  endDate,
}: IPollCardProps) {
  console.log("Rendering PollCard with id:", id);

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <p className="text-gray-800">{title}</p>
      <p className="text-gray-600">{startDate}</p>
      <p className="text-gray-600">{endDate}</p>
    </div>
  );
}

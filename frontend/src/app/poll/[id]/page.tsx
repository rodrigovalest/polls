"use client";

interface IPollProps {
  params: { id: string }
}

export default function Poll({ 
  params 
}: IPollProps) {
  return <div>My Post: {params.id}</div>;
}

"use client";

interface ITitleProps {
  title: string;
}

export default function Title({
  title,
}: ITitleProps) {
  return (
    <h2 className="font-MonaSans font-bold text-black">
      {title}
    </h2>
  );
}

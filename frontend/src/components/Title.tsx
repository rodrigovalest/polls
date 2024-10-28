"use client";

interface ITitleProps {
  title: string;
}

export default function Title({
  title,
}: ITitleProps) {
  return (
    <h2 className="font-MonaSans font-extrabold text-black text-5xl">
      {title}
    </h2>
  );
}

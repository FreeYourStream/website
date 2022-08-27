import { FC } from "react";

export const Title: FC<{ text: string }> = ({ text }) => {
  return (
    <h1 className="text-4xl font-bold text-center pt-8">
      <span className="text-primary-400">{text}</span>
    </h1>
  );
};

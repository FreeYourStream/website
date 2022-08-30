import { FC } from "react";

export const Title: FC<{
  text: string;
  small?: boolean;
  className?: string;
}> = ({ text, small = false, className }) => {
  return (
    <div className={className}>
      <h1
        className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-400 ${
          small ? "pb-3" : "pb-6"
        } ${small ? "text-2xl" : "text-4xl"}`}
      >
        {text}
      </h1>
    </div>
  );
};

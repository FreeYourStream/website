import { FC } from "react";

export const Title: FC<{ text: string; small?: boolean }> = ({
  text,
  small = false,
}) => {
  return (
    <div className="mt-8">
      <h1
        style={{ color: "#0000 !important" }}
        className={`font-bold bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500 ${
          small ? "pb-3" : "pb-6"
        } ${small ? "text-2xl" : "text-4xl"}`}
      >
        {text}
      </h1>
    </div>
  );
};
